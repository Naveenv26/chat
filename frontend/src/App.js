import React, { useState } from 'react';
import ChatRoom from './ChatRoom';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const room = 'room1';

  return (
    <div className="app-container">
      {!username ? (
        <div className="login-container">
          <h2>Select User</h2>
          <div className="button-group">
            <button onClick={() => setUsername('user1')}>Login as User 1</button>
            <button onClick={() => setUsername('user2')}>Login as User 2</button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="login-status">Logged in as: <span>{username}</span></h3>
          <ChatRoom username={username} room={room} />
        </>
      )}
    </div>
  );
}

export default App;
