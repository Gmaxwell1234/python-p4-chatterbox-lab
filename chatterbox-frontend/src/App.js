import React, { useEffect, useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);

  // Fetch messages from Flask API
  useEffect(() => {
    fetch('http://127.0.0.1:5555/messages')
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching messages:', error));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>💬 Chatterbox Messages</h1>
      {messages.map(message => (
        <div key={message.id} style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc", paddingBottom: "0.5rem" }}>
          <p><strong>{message.username}:</strong> {message.body}</p>
          <p style={{ fontSize: "0.8rem", color: "#555" }}>{new Date(message.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
