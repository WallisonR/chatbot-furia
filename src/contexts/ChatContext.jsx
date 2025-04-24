import React, { createContext, useState, useContext } from 'react';
import { generateBotResponse } from '../services/chatService';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      sender: 'bot', 
      content: 'Olá, Guerreiro! Bem-vindo ao FURIA Connect. Estou aqui para te manter por dentro de tudo sobre a nossa equipe. Como posso ajudar hoje?', 
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) 
    },
  ]);
  
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: inputValue,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    
    // Generate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(currentMessages => [...currentMessages, {
        id: currentMessages.length + 1,
        sender: 'bot',
        content: botResponse,
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1000);
  };

  return (
    <ChatContext.Provider value={{
      messages,
      inputValue,
      handleInputChange,
      handleSendMessage
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;