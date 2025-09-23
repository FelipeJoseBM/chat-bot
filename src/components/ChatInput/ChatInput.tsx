import React from "react";
import "./chatinput.css";

export default function ChatInput() {
  return (
    <div>
      <div className="msg-bot-answer">
        <div>
          <button className="answer" id="1">
            Olá Bot! Como você está?
          </button>
        </div>
        <div>
          <button className="answer" id="2">
            Tenho uma pergunta.
          </button>
        </div>
        <div>
          <button className="answer" id="3">
            Que filme posso ver hoje?
          </button>
        </div>
        <div>
          <button className="answer" id="4">
            Como está o tempo lá fora?
          </button>
        </div>
        <div>
          <button className="answer" id="5">
            Me conte uma piada.
          </button>
        </div>
      </div>
    </div>
  );
}
