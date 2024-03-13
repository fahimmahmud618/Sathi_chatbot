import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import "./Chatbot.css";
import sendpic from "./asset/send.png";
import micpic from "./asset/mic.png";
import SpeechToTextComponent from "./speech";
import Navbar from "./Navbar"; // Import Navbar component if it's not already imported
import axios from "axios";
function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (transcript.trim() !== "") {
      setMsg(transcript);
      setTranscript("");
    }
  }, [transcript, setTranscript]);

  function getAPIresponse(msg) {
    axios.post("http://localhost:5000/api/chatbot", { message: msg })
      .then(response => {
        const newMessages = [
          ...messages,
          { message: msg, isBot: false },
          { message: response.data.message, isBot: true }
        ];
        setMessages(newMessages);
        // Optional: You can save the messages to localStorage or a database here
      })
      .catch(error => {
        console.error('Error fetching response from backend:', error);
      });
  }

  function setMsg(msg) {
    setMessages([...messages, { message: msg, isBot: false }]);
    setTimeout(() => {
      getAPIresponse(msg);
    }, 500);
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      setMsg(trimmedInput);
      setInput("");
    }
  };

  const toggleListening = () => {
    setIsListening((prev) => !prev);
    setShowPopup((prev) => !prev);
    <SpeechToTextComponent
      isListening={isListening}
      onTranscriptUpdate={setTranscript}
      onListeningChange={setIsListening}
    />;
  };

  return (
    <div className="back">
      <Navbar /> {/* Render Navbar component */}
      <center>
        <div className="chat_window">
          <div className="pt-1">
            <ChatMessage key={1} message="Hello ! How can I help you today?" isBot={true} />
          </div>
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.message} isBot={msg.isBot} />
          ))}
        </div>
        <form onSubmit={handleSendMessage}>
          <div className="icons pb-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="inputbox"
              placeholder="Ask Anything..."
            />
            <img
              src={micpic}
              alt="Mic"
              className="mic-icon ps-1"
              onClick={toggleListening}
              style={{ cursor: "pointer", width: "24px", height: "24px" }}
            />
            {showPopup && (
              <div className="listening-popup">Listening, Speak now</div>
            )}
            <input
              style={{ paddingLeft: "4px" }}
              type="image"
              src={sendpic}
              alt="Submit"
            />
          </div>
        </form>
      </center>
    </div>
  );
}

export default Chatbot;
