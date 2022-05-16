import { Link } from 'react-router-dom';
import { ListItem } from '@mui/material';
import { nanoid } from 'nanoid';
import React, { FC, useState } from 'react';
import { push, remove, set } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';

import { selectChatList } from 'src/store/chats/selectors';
import { chatsRef, getChatsById } from 'src/services/firebase';

export const ChatList: FC = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const chatList = useSelector(
    selectChatList,
    (prev, next) => prev.length === next.length
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      // dispatch(addChat({ name }));
      const id = nanoid();

      push(chatsRef, {
        id,
        messageList: {
          empty: true,
        },
        name,
      });

      setName('');
    }
  };

  const handleDeleteChat = (id: string) => {
    // () => dispatch(deleteChat({ chatId: chat.name }))
    remove(getChatsById(id));
  };

  return (
    <>
      <ul>
        {chatList.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
            <button onClick={() => handleDeleteChat(chat.id)}>x</button>
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
