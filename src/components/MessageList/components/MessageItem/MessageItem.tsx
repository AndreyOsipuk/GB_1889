import React, { FC, memo } from 'react';

export interface Message {
  id: string;
  author: string;
  text: string;
}

interface MessageProps {
  message: Message;
}

export const MessageItem: FC<MessageProps> = memo(({ message }) => (
  <li>
    {message.author}: {message.text}
  </li>
));
