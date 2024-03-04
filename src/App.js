import React from 'react';
import './App.css';
import Chatbot from './Chatbot';

function App() {
  return (
    <div className="App">
      <div className="headnav">
        Sathi AI
      </div>
      <header className="App-header">
        <Chatbot />
      </header>
    </div>
  );
}

export default App;
