import React from "react";
import "./chatinput.css";
import ButtonAnswer from "../ButtonAnswer/ButtonAnswer";

export default function ChatInput() {
  return (
    <div>
      <div className="msg-bot-answer">
        <div>
          <button className="answer" id="1">
            Hello Bot! How are you?
          </button>
        </div>
        <div>
          <button className="answer" id="2">
            I have a question.
          </button>
        </div>
        <div>
          <button className="answer" id="3">
            What movie can I see today?
          </button>
        </div>
        <div>
          <button className="answer" id="4">
            What's the weather outside?
          </button>
        </div>
        <div>
          <button className="answer" id="5">
            Tell me a joke.
          </button>
        </div>
      </div>
    </div>
  );
}
