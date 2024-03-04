import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import "./Chatbot.css";
import sendpic from "./asset/send.png";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  function getAPIresponse(msg) {
    if (msg.toLowerCase() == "hi") 
      return "Hello! How can I help you";
    else 
      return "Wait for my API connection. Thank you";
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
    }
    setInput("");
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
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="inputbox"
          placeholder="Ask Anything..."
        />
        <input
          style={{ paddingLeft: "4px" }}
          type="image"
          src={sendpic}
          alt="Submit"
        ></input>
      </form>
    </center>
  );
}

export default Chatbot;
