import React, { FC, useState } from 'react';
import { Chat } from '../App';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { ListItem } from '@mui/material';

interface ChatListProps {
  chatList: Chat[];
  onAddChat: (chats: Chat) => void;
}
export const ChatList: FC<ChatListProps> = ({ chatList, onAddChat }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      onAddChat({
        id: nanoid(),
        name,
      });

      setName('');
    }
  };

  return (
    <>
      <ul>
        {chatList.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">add chat</button>
      </form>
    </>
  );
};
