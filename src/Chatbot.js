import React, { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import "./Chatbot.css";
import sendpic from "./asset/icons8-send-48.png";
import micpic from "./asset/icons8-mic-48.png";
import SpeechToTextComponent from "./speech";
import Navbar from "./Navbar";
import axios from "axios";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat window whenever messages change
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [messages]);

  // Function to handle sending messages to the backend API
  function getAPIresponse(msg) {
    axios
      .post("http://localhost:5000/api/chatbot", { message: msg })
      .then((response) => {
        const newMessages = [
          ...messages,
          { message: msg, isBot: false },
          { message: response.data.message, isBot: true },
        ];
        setMessages(newMessages);
      })
      .catch((error) => {
        console.error("Error fetching response from backend:", error);
      });
  }

  // Function to handle user input and sending messages
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
      <Navbar />
      <center>
        <div className="chat_window" ref={chatWindowRef}>
          <div className="pt-1">
            <ChatMessage
              key={1}
              message="Hello! How can I help you today?"
              isBot={true}
            />
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
            <button type="submit" className="send-icon ps-1">
              <img src={sendpic} alt="Submit" />
            </button>
          </div>
        </form>
      </center>
    </div>
  );
}

export default Chatbot;
