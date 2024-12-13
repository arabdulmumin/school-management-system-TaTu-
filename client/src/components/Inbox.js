import React from 'react';

const Inbox = ({ messages }) => {
  return (
    <div>
      <h2>Inbox</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Inbox;