import React, { useState } from "react";
import "./chatmessage.css";
import ChatInput from "../ChatInput/ChatInput";

export default function ChatMessage() {
  const [messages, setMessages] = useState([]);

  // const adicionarMensagem = (sender: string, text: string) => {
  //   const novaMensagem = { sender, text, id: Date.now() };
  //   setMessages((precMessages) => [...prevMessages, novaMensagem]);
  // };
  return (
    <div>
      <div className="container-chat">
        <div className="container-name">
          <h5 className="msg-name">Fefe's BOT</h5>
        </div>
        <div className="container-msg">
          <div className="msg-bot">
            <p>Hello person! What's up?</p>
          </div>
          <div className="msg-bot">
            <p>I'm a Bot, and this is my chat!</p>
          </div>
        </div>
        <ChatInput />
      </div>
    </div>
  );
}
