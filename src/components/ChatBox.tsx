import React from "react";
import "./chatbox.css";
import profilePhoto from "../img/profile-photo.jpg";

export default function ChatBox() {
  return (
    <div>
      <div className="container-menu">
        <img src={profilePhoto} alt="" className="menu-photo" />
        <div className="profile-data">
          <h2 className="menu-name">Nome</h2>
          <h4 className="menu-status">Status</h4>
        </div>
      </div>
      <div className="container-chat">
        <div className="container-name">
          <h5 className="msg-name">Nome</h5>
        </div>
        <div className="container-msg">
          <div className="msg-bot">Hello person! What's up?</div>
          <div className="msg-bot">I'm a Bot, and this is my chat!</div>
        </div>
        <div className="container-answer">
          <div className="answer">
            <p>Hello Bot! How are you?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
