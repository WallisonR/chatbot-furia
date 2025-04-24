import React from 'react';
import './App.css';
import Chat from './components/Chat';
import { ChatProvider } from './contexts/ChatContext';

function App() {
  return (
    <ChatProvider>
      <div className="App">
        <Chat />
      </div>
    </ChatProvider>
  );
}

export default App;