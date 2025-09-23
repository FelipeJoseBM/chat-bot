import React from "react";
import profilePhoto from "../../img/profile-photo.jpg";
import "./chatbox.css";
import ChatMessage from "../ChatMessage/Chatmessage";

export default function ChatBox() {
  return (
    <div>
      <div className="container-menu">
        <img src={profilePhoto} alt="Foto de perfil" className="menu-photo" />
        <div className="profile-data">
          <h2 className="menu-name">Nome</h2>
          <h4 className="menu-status">Online</h4>
        </div>
      </div>
      <ChatMessage />
    </div>
  );
}
