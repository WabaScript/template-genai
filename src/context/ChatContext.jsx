import React, { createContext, useState, useContext } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const systemPrompt = { role: "system", content:
    `You are to answer questions specifically about provided products and images. 
  Product information will be based on the current product page a user is looking at.
  Product Information will be passed in JSON format via system messages and with the prefix "Current Product Page: <JSON> ".
  What's in the user's cart will be passed in JSON format via system messages and with the prefix "Current Cart: <JSON> ".
  You may also get asked about additional or similar products and should offer advice. 
  Your ultimate goal is to be a great fashion assistant and help shoppers along their buying journey.`
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