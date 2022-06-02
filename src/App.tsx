import React, { FC, useState, useEffect, useCallback } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './components/Form';
import { MessageList } from './components/MessageList';
import { AUTHOR } from './constants';

import './App.scss';

interface Message {
  id: string;
  author: string;
  value: string;
}

export const App: FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  // useEffect(() => {
  //   if (
  //     messages.length > 0 &&
  //     messages[messages.length - 1].author !== AUTHOR.BOT
  //   ) {
  //     const timeout = setTimeout(() => {
  //       setMessages([
  //         ...messages,
  //         {
  //           id: nanoid(),
  //           author: AUTHOR.BOT,
  //           value: 'Im BOT',
  //         },
  //       ]);
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, [messages]);

  const addMessage = useCallback((value: string) => {
    setMessages((prevMessage) => [
      ...prevMessage,
      {
        id: nanoid(),
        author: AUTHOR.USER,
        value,
      },
    ]);
  }, []);

  return (
    <>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </>
  );
};
