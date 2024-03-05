import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import "./Chatbot.css";
import sendpic from "./asset/send.png";
import micpic from "./asset/mic.png"; // Import the microphone image
import SpeechToTextComponent from "./speech";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  useEffect(() => {
    if (transcript.trim() !== "") {
      setMsg(transcript);
      setTranscript(""); // Reset transcript after setting the message
    }
  }, [transcript, setTranscript]);

  function getAPIresponse(msg) {
    if (msg.toLowerCase() === "hi") return "Hello! How can I help you?";
    else return "Wait for my API connection. Thank you.";
  }

  function setMsg(msg) {
    setMessages([...messages, { message: msg, isBot: false }]);
    setTimeout(() => {
      setMessages((messages) => [
        ...messages,
        { message: getAPIresponse(msg), isBot: true },
      ]);
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

  // Toggle listening and popup visibility
  const toggleListening = () => {
    setIsListening((prev) => !prev);
    setShowPopup((prev) => !prev); // Toggle popup visibility
  };

  return (
    <center>
      <div className="chat_window">
        <div className="pt-1">
          <ChatMessage key={1} message="Hey, What's up!" isBot={true} />
        </div>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.message} isBot={msg.isBot} />
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <div className="icons">
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
  );
}

export default Chatbot;
