import React from 'react';
import { Send } from 'lucide-react';
import { useChat } from '../../contexts/ChatContext';

const ChatInput = () => {
  const { inputValue, handleInputChange, handleSendMessage } = useChat();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="p-2 sm:p-4 border-t border-gray-300 bg-white">
      <div className="flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Pergunte sobre jogos, resultados, lineup..."
          className="flex-1 border border-gray-300 rounded-full py-2 px-3 sm:px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <button 
          onClick={handleSendMessage}
          className="ml-2 bg-black text-white rounded-full p-2 hover:bg-gray-800 focus:outline-none"
        >
          <Send className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;