import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import useChatMessages from './useChatMessages';
import ChatbotActionProvider from './ChatbotActionProvider';

const ChatbotComponent = () => {
  const { messages, addMessage } = useChatMessages();
  const handleUserMessage = (message) => {
    addMessage({ text: message, isUser: true });
  };

  const config = {
    inputPlaceholder: 'Type a message…',
    initialMessages: [], // Add an empty array for initialMessages
  };

  const actionProvider =  new ChatbotActionProvider(
    addMessage, // Pass the addMessage function to ChatbotActionProvider
    (state) => setState(state) // Assuming you have a setState function
  );
  const messageParser = {};

  return (
    <div>
      <Chatbot
        config={config}
        actionProvider={actionProvider}
        messageParser={messageParser}
        handleUserMessage={handleUserMessage}
      />
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </div>
    </div>
  );
};

export default ChatbotComponent;
