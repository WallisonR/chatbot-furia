import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import { useChat } from '../../contexts/ChatContext';

const ChatContainer = () => {
  const { messages } = useChat();
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 p-2 sm:p-4 overflow-y-auto bg-gray-50">
      <div className="space-y-3 sm:space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatContainer;