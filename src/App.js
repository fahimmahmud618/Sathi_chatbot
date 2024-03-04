import React from 'react';
import './App.css';
import Chatbot from './Chatbot';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <center><div className="headnav">
        Sathi AI
      </div></center>
      
      <header className="App-header">
        
        <Home/> <Chatbot />
      </header>
    </div>
  );
}

export default App;
