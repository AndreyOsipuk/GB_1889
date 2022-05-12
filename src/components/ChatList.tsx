import { Link } from 'react-router-dom';
import { ListItem } from '@mui/material';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectChatList } from 'src/store/chats/selectors';
import { addChat, deleteChat } from 'src/store/chats/slice';

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
      dispatch(addChat({ name }));
      setName('');
    }
  };

  return (
    <>
      <ul>
        {chatList.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
            <button onClick={() => dispatch(deleteChat({ chatId: chat.name }))}>
              x
            </button>
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
