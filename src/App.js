import React from "react";
import "./App.css";
import Chatbot from "./Chatbot";
import Home from "./Home";
import { BrowserRouter,StaticRouter, Navigate, Routes, Route, Link, createBrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <center>
        <div className="headnav">Sathi AI</div>
      </center>
      <BrowserRouter>
      <Routes>
        <Route path="/d" element={<Home/>}/>
        <Route path="/" element={<Chatbot/>}/>
      </Routes>
    </BrowserRouter>
      

      <header className="App-header">
        {/* <Home /> */}
        
      </header>
    </div>
  );
}

export default App;
