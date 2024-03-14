import React from "react";
import "./Chatbot.css";
import botpic from "./asset/icons8-assistant-64.png";
import userpic from "./asset/icons8-user-48 (1).png";
import Clock from "./Clock";

function ChatMessage({ message, isBot }) {
  // Function to parse message content
  const parseMessage = (content) => {
    // Replace newline characters with <br> tags
    let parsedContent = content.replace(/\n/g, "<br>");
    // Replace **text** with <strong>text</strong>
    parsedContent = parsedContent.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    return { __html: parsedContent };
  };

  return (
    <div
      className="chat_div"
      style={{
        justifyContent: isBot ? "" : "flex-end",
        textAlign: isBot ? "left" : "right",
      }}
    >
      {isBot && <img className="profile_pic_bot" src={botpic} alt="Sathi" />}
      <p
        className="chat_msg"
        style={{
          maxWidth: "50%",
          width: "auto",
          display: "inline-block",
          padding: "8px",
          borderRadius: "12px",
          color: isBot ? "#000" : "#ffffff",
          border: isBot ? "0.1px solid black" : "",
          backgroundImage: isBot
            ? "linear-gradient(120deg, #F7EFE5, #FFFBF5)"
            : "linear-gradient(120deg, #007217, #007217)",
          textAlign: "left",
        }}
        dangerouslySetInnerHTML={parseMessage(message)}
      ></p>

      {/* Move clock component below the message */}
      <div className="clock_wrapper">
        {!isBot && <Clock />}
      </div>
      {!isBot && <img className="profile_pic_user" src={userpic} alt="Me" />}
    </div>
  );
}

export default ChatMessage;
