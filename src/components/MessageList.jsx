import React from 'react';

export const MessageList = ({ messages }) => (
  <ul>
    {messages.map((message, idx) => (
      <li key={idx}>
        {message.author}: {message.value}
      </li>
    ))}
  </ul>
);
