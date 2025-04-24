import React from 'react';
import { Bell } from 'lucide-react';

const ChatHeader = ({ isDesktop }) => {
  return (
    <div className="bg-black text-white p-3 sm:p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img 
          src="/assets/images/furia-logo.png" 
          alt="FURIA Logo" 
          className="h-6 w-6 sm:h-8 sm:w-8 mr-2"
        />
        <div>
          <h1 className="font-bold text-lg sm:text-xl">FURIA Connect</h1>
          <p className="text-xs text-gray-300 hidden sm:block">Conectado ao universo FURIA</p>
        </div>
      </div>
      <Bell className="h-5 w-5 text-gray-300" />
    </div>
  );
};

export default ChatHeader;