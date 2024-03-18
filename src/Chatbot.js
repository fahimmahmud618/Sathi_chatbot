import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import "./Chatbot.css";
import sendpic from "./asset/icons8-send-48.png";
import micpic from "./asset/icons8-mic-48.png";
import SpeechToTextComponent from "./speech";
import Navbar from "./Navbar";

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
    <>
    <div className="back">

    <Navbar/>
    <center>
      <div className="chat_window" >
        <div className="pt-1">
          <ChatMessage key={1} message="Hey, What's up!" isBot={true} />
        </div>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.message} isBot={msg.isBot} timestamp={"10:38 am"}/>
        ))}
      
      </div>
      <form className="sends" onSubmit={handleSendMessage}>
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
            className="mic-icon"
            onClick={toggleListening}
            style={{ cursor: "pointer", width: "24px", height: "24px" }}
          />
          {showPopup && (
            <div className="listening-popup">Listening, Speak now</div>
          )}
          <input
          className="send-icon"
            type="image"
            src={sendpic}
            alt="Submit"
          />
        </div>
      </form>
    </center>
    </div>
    </>
  );
}

export default Chatbot;
