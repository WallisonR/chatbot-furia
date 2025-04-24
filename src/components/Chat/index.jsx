import React from 'react';
import ChatHeader from './ChatHeader';
import ChatContainer from './ChatContainer';
import ChatInput from './ChatInput';
import Navigation from '../Navigation/Navigation';
import { useWindowSize } from '../../hooks/useWindowSize';

const Chat = () => {
  const { isDesktop } = useWindowSize();
  
  return (
    <div className="flex flex-col h-screen w-full max-w-md mx-auto bg-gray-100 shadow-lg">
      <ChatHeader isDesktop={isDesktop} />
      <Navigation isDesktop={isDesktop} />
      <ChatContainer />
      <ChatInput />
    </div>
  );
};

export default Chat;