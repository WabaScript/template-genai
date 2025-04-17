import { Ollama } from 'ollama';
import { useChat } from '../context/ChatContext';
import { useRef, useState } from 'react';

export const useOllamaChat = () => {
  const { addMessage, updateLastMessage, addLlmMessage, llmMessages } = useChat();
  // Ref to store the current Ollama client instance
  const currentClientRef = useRef(null);
  // State flag to indicate if streaming is in progress
  const [isStreaming, setIsStreaming] = useState(false);

  const sendMessage = async (userMessage) => {
    // Prevent starting a new streaming process if one is already in progress
    if (isStreaming) {
      console.log('Already streaming, please wait.');
      return;
    }
    // Start streaming, disable new input
    setIsStreaming(true);

    // Build the payload for the backend.
    // If attachments exist, ensure content is not empty; default to a prompt.
    let payload;
    if (typeof userMessage === 'object') {
      if (userMessage.attachments && userMessage.attachments.length > 0) {
        payload = {
          role: 'user',
          content: userMessage.text || 'What is in this image?',
          images: userMessage.attachments.map((att) => att.raw),
        };
      } else {
        payload = { role: 'user', content: userMessage.text };
      }
    } else {
      payload = { role: 'user', content: userMessage };
    }

    // Update llmMessages with the new payload
    const updatedLlmMessages = [...llmMessages, payload];

// Add a placeholder for the bot's response
    const botMessageId = addMessage({
      text: '',
      sender: 'bot',
      isStreaming: true,
    });

    // Create a new Ollama client and store it in the ref
    const client = new Ollama();
    currentClientRef.current = client;

    try {
      // Choose the model based on whether attachments are present.
      const modelName =
        typeof userMessage === 'object' && userMessage.attachments?.length > 0
          ? 'llama3.2-vision'
          : 'llama3.2';

      const stream = await client.chat({
        model: 'gemma3', // testing new model, multi-modal built in
        messages: updatedLlmMessages,
        stream: true,
      });

      // Local variable to accumulate the final response
      let finalResponse = '';

      // Stream the response and update the chat UI incrementally
      for await (const part of stream) {
        finalResponse += part.message.content;
        updateLastMessage(botMessageId, (prevMessage) => ({
          text: finalResponse,
        }));
      }

      // Only store the final message if it wasn't stopped
      if (finalResponse) {
        // store the user message in the LLM messages
        addLlmMessage(payload);
        // store llm response
        const finalMessage = { role: 'assistant', content: finalResponse };
        addLlmMessage(finalMessage);
        // testing llm image/non-image convo continuation
        console.log("last user message:", payload);
        console.log('Final message:', finalMessage);
        console.log('current full chat llmMessage:', llmMessages)
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Streaming was aborted.');
      } else if (error.message.includes('NetworkError')) {
        console.error('Error during chat completion:', error);
        alert('Ollama may not be running. Confirm and try again.');
      } else {
        console.error('Error during chat completion:', error);
      }
    }

    // Streaming complete, re-enable input
    setIsStreaming(false);
    currentClientRef.current = null;
  };

  // Function to stop streaming
  const stopStreaming = () => {
    if (currentClientRef.current) {
      console.log('Aborting streaming request...');
      currentClientRef.current.abort();
      setIsStreaming(false);
    }
  };

  return { sendMessage, stopStreaming, isStreaming };
};