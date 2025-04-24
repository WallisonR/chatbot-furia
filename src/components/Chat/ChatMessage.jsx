import React from 'react';

const ChatMessage = ({ message }) => {
  const { sender, content, time } = message;
  const isUser = sender === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div 
        className={`max-w-xs sm:max-w-sm p-2 sm:p-3 rounded-lg ${
          isUser 
            ? 'bg-black text-white rounded-br-none' 
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        <p className="text-sm sm:text-base">{content}</p>
        <span className={`text-xs ${isUser ? 'text-gray-300' : 'text-gray-500'} block text-right mt-1`}>
          {time}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;