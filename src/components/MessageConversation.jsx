import { useState } from "react";
import { Icon } from "./Icon";

export const MessageConversation = ({ farmer, currentUser, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "farmer",
      text: `Hi! I'm ${farmer.name}. How can I help you today?`,
      time: "09:30 AM",
    },
  ]);
  const [draft, setDraft] = useState("");

  const sendMessage = () => {
    if (!draft.trim()) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    setMessages(prev => [
      ...prev,
      { id: Date.now(), from: "user", text: draft.trim(), time },
    ]);
    setDraft("");
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="chat-modal">
        <div className="chat-header">
          <div className="chat-user-info">
            <div className="chat-user-avatar">{farmer.avatar}</div>
            <div>
              <div className="chat-user-name">{farmer.name}</div>
              <div className="chat-user-sub">{farmer.location} · Usually replies in 10 mins</div>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>
            <Icon name="close" size={16} />
          </button>
        </div>

        <div className="chat-body">
          {messages.map(message => (
            <div key={message.id} className={`chat-row ${message.from === "user" ? "me" : "them"}`}>
              <div className="chat-bubble-wrap">
                <div className={`chat-bubble ${message.from === "user" ? "chat-bubble-me" : "chat-bubble-them"}`}>
                  {message.text}
                </div>
                <div className="chat-time">{message.time}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input-bar">
          <input
            className="chat-input"
            value={draft}
            onChange={e => setDraft(e.target.value)}
            placeholder={`Message ${farmer.name.split(" ")[0]}...`}
            onKeyDown={e => {
              if (e.key === "Enter") sendMessage();
            }}
          />
          <button className="submit-btn" onClick={sendMessage}>
            Send
          </button>
        </div>

        <div className="chat-footer-note">
          Logged in as {currentUser?.name || "Guest"}
        </div>
      </div>
    </div>
  );
};
