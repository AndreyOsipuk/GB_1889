import React, { useState, useEffect } from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList';
import { AUTHOR } from './constants';

export const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author !== AUTHOR.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: AUTHOR.BOT,
            value: "I'm BOT",
          },
        ]);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  const addMessage = (value) => {
    setMessages([
      ...messages,
      {
        author: AUTHOR.USER,
        value,
      },
    ]);
  };

  return (
    <>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </>
  );
};
