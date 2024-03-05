import React from "react";
import "./App.css";
import Chatbot from "./Chatbot";
import Home from "./Home";
import logoset from "./asset/logoset.png";
import logo from "./asset/sathi-logo.svg";
import {
  BrowserRouter,
  StaticRouter,
  Navigate,
  Routes,
  Route,
  Link,
  createBrowserRouter,
} from "react-router-dom";
import SpeechToText from "./speech";
import SpeechToTextComponent from "./speech";
function App() {
  return (
    <div className="App">
      <div class="headnav d-flex ps-3 pe-3">
        <div class="p-2 w-100">
          <a href="/"><img src={logo} alt="logoset" /></a>
          
        </div>
        <div class="p-2 flex-shrink-1">
          {" "}
          <img className="align-content-end" src={logoset} alt="logoset" />
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chatbot />} />
        </Routes>
      </BrowserRouter>

      <header className="App-header">{/* <Home /> */}</header>
    </div>
  );
}

export default App;
