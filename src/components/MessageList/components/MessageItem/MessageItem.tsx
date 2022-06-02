import React, { FC, memo } from 'react';

export interface Message {
  id: string;
  author: string;
  value: string;
}

interface MessageProps {
  message: Message;
}

export const MessageItem: FC<MessageProps> = memo(({ message }) => (
  <li>
    {message.author}: {message.value}
  </li>
));
