import React, { FC } from 'react';
import { MessageItem, Message } from './components/MessageItem';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
  <ul>
    {messages.map((message, idx) => (
      <MessageItem message={message} key={idx} />
    ))}
  </ul>
);
