import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import "./Chatbot.css";
import sendpic from "./asset/send.png";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      setMessages([...messages, { message: trimmedInput, isBot: false }]);
      setTimeout(() => {
        setMessages((messages) => [
          ...messages,
          { message: "Wait for my API connection. Thank you", isBot: true },
        ]);
      }, 500); // Simulate a response delay
    }
    setInput("");
  };

  return (
    <div>
      <div className="chat_window">
      <ChatMessage key={1} message="Hey, What's up!" isBot={true} />
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.message} isBot={msg.isBot} />
        ))}
      </div>
      <form
        onSubmit={handleSendMessage}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
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
    </div>
  );
}

export default Chatbot;
