import React, {useState, useEffect} from "react";
import "./App.css";
import Chatbot from "./Chatbot";
import Home from "./Home";

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
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      const response = await fetch("http://localhost:5000/api/data");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("error", error);
    }
    
  }
  return (
    <div className="App">
     {/* <div class="headnav d-flex ps-3 pe-3"> 
        <div class="p-2 w-100">
          <a href="/">
            <img src={logo} alt="logoset" />
          </a>
        </div>
        <div class="p-2 flex-shrink-1">
          {" "}
          <img className="align-content-end" src={logoset} alt="logoset" />
          
        </div>
      </div> */}
      {/* <h2>frontend of {data.message}</h2> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/chat" element={<Chatbot />} />
          
        </Routes>
      </BrowserRouter>

      <header className="App-header">{/* <Home /> */}</header>
    </div>
  );
}

export default App;