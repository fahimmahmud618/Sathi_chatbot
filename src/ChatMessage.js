import React from "react";
import "./Chatbot.css";
import botpic from "./asset/botpic.png";
import userpic from "./asset/user.png";

function ChatMessage({ message, isBot }) {
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
            : "linear-gradient(120deg, #017F0E, #017F0E)",
          textAlign: "left",
        }}
      >
        {message}
      </p>

      {!isBot && <img className="profile_pic_user" src={userpic} alt="Me" />}
    </div>
  );
}

export default ChatMessage;
