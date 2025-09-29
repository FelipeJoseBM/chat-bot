import React, { useState } from "react";
import "./chatmessage.css";

export default function ChatMessage() {
  interface Mensagens {
    text: string;
    sender: "user" | "bot";
  }

  const [mensagens, setMensagens] = useState<Mensagens[]>([
    { text: "Olá pessoa! Tudo bem?", sender: "bot" },
    { text: "Eu sou um Bot, e este é o meu chat!", sender: "bot" },
  ]);

  const botRespostas: { [key: string]: string } = {
    "Olá Bot! Como você está?": "Estou bem, obrigado por perguntar! E você?",
    "Tenho uma pergunta.": "Claro! Pode perguntar o que quiser.",
    "Que filme posso ver hoje?": "Recomendo assistir 'Inception'.",
    "Como está o tempo lá fora?": "Está ensolarado e quente.",
    "Me conte uma piada.":
      "Por que o livro de matemática se suicidou? Porque tinha muitos problemas.",
  };

  const Clicar = (question: string) => {
    setMensagens((prevMensagens) => [
      ...prevMensagens,
      { text: question, sender: "user" },
    ]);
    setTimeout(() => {
      const botResposta = botRespostas[question];
      setMensagens((prevMensagens) => [
        ...prevMensagens,
        { text: botResposta, sender: "bot" },
      ]);
    }, 1500);
  };

  return (
    <div className="container-chat">
      <div className="container-name">
        <h5 className="msg-name">BOT do Fefe</h5>
      </div>
      <div className="chat-container">
        {mensagens.map((msg, index) => (
          <div key={index} className={`msg-bot`}>
            {msg.text}
          </div>
        ))}
        <div className="msg-bot-answer">
          <div>
            <button
              className="answer"
              onClick={() => Clicar("Olá Bot! Como você está?")}
            >
              Olá Bot! Como você está?
            </button>
          </div>
          <div>
            <button
              className="answer"
              onClick={() => Clicar("Tenho uma pergunta.")}
            >
              Tenho uma pergunta.
            </button>
          </div>
          <div>
            <button
              className="answer"
              onClick={() => Clicar("Que filme posso ver hoje?")}
            >
              Que filme posso ver hoje?
            </button>
          </div>
          <div>
            <button
              className="answer"
              onClick={() => Clicar("Como está o tempo lá fora?")}
            >
              Como está o tempo lá fora?
            </button>
          </div>
          <div>
            <button
              className="answer"
              onClick={() => Clicar("Me conte uma piada.")}
            >
              Me conte uma piada.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
