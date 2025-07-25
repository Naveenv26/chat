import React, { useEffect, useRef, useState } from 'react';
import './ChatRoom.css';

const ChatRoom = ({ username, room }) => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8000/ws/chat/${room}/`);
    ws.onopen = () => console.log('✅ WebSocket connected');
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setChat((prev) => [...prev, data]);
    };
    ws.onerror = (err) => console.error('❌ WebSocket error', err);
    ws.onclose = () => console.log('⚠️ WebSocket closed');
    setSocket(ws);
    return () => ws.close();
  }, [room]);

  const sendMessage = () => {
    if (socket && message.trim()) {
      socket.send(JSON.stringify({ message, sender: username }));
      setMessage('');
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="room-name">Room: <span>{room}</span></div>
        <div className="user-name">Logged in as: <span>{username}</span></div>
      </div>

      <div className="chat-body">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`chat-bubble ${msg.sender === username ? 'sent' : 'received'}`}
          >
            <span className="sender-name">{msg.sender}</span>
            <div className="bubble-text">{msg.message}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-footer">
        <input
          className="chat-input"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="send-button" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
