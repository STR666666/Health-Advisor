import './App.css';
import React from 'react';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import './App.css';

import ActionProvider from './components/ActionProvider';
import MessageParser from './components/MessageParser';
import config from './components/config';
import BodyMap from './components/BodyMap'; // Import your BodyMap

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style = {{maxWidth: "250px"}}>
        <Chatbot config={config} actionProvider={ActionProvider} 	messageParser={MessageParser} />
        </div>
        {/* <BodyMap />  */}
      </header>
    </div>
  );
}

export default App;
