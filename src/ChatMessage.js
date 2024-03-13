import React from "react";
import "./Chatbot.css";
import botpic from "./asset/icons8-assistant-64.png";
import userpic from "./asset/icons8-user-48 (1).png";

function ChatMessage({ message, isBot }) {
  return (
    <>
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
            // border: isBot ? "0.1px solid black" : "",
            backgroundImage: isBot
              ? "linear-gradient(120deg, #F7EFE5, #FFFBF5)"
              : "linear-gradient(120deg, #B7248E, #B7248E)",
            textAlign: "left",
          }}
        >
          {message}
        </p>
        {/* {!isBot && <p className="time">10:38 am</p>} */}

        {!isBot && <img className="profile_pic_user" src={userpic} alt="Me" />}
      </div>
    </>
  );
}

export default ChatMessage;
