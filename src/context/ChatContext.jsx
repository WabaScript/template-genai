import React, { createContext, useState, useContext } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const systemPrompt = {
    role: "system",
    content: `You are a helpful assistant. You can answer questions, provide information, and assist with various tasks.`
  };

  const [chatMessages, setChatMessages] = useState([]);
  const [llmMessages, setLlmMessages] = useState([systemPrompt]);

  const addLlmMessage = (message) => {
    setLlmMessages((prevMessages) => [...prevMessages, message]);
  };

  const addMessage = (message) => {
    const id = Date.now() + Math.random(); // Generate a unique ID
    setChatMessages((prevMessages) => [...prevMessages, { id, ...message }]);
    return id; // Return the ID for further updates
  };

  const updateLastMessage = (id, updateFnOrFields) => {
    setChatMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id
          ? typeof updateFnOrFields === "function"
            ? { ...msg, ...updateFnOrFields(msg) }
            : { ...msg, ...updateFnOrFields }
          : msg
      )
    );
  };

  return (
    <ChatContext.Provider value={{ chatMessages, addMessage, updateLastMessage, addLlmMessage, llmMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);