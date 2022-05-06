import { Navigate, useParams } from 'react-router-dom';
import React, { FC } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { ChatList } from '../../components/ChatList';
import { Form } from '../../components/Form/Form';
import { MessageList } from '../../components/MessageList/MessageList';
import { WithClasses } from 'src/HOC/WithClasses';
import { selectChatList, selectChats } from 'src/store/chats/selectors';

import style from './Chats.module.css';

export const Chats: FC = () => {
  const { chatId } = useParams();

  const MessageListWithClass = WithClasses(MessageList);

  const chats = useSelector(selectChats, shallowEqual);
  const chatList = useSelector(selectChatList, shallowEqual);

  if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <>
      <ChatList />
      {/* <MessageList messages={chatId ? messages[chatId] : []} /> */}
      <MessageListWithClass
        messages={chatId ? chats[chatId] : []}
        classes={style.border}
      />
      <Form />
    </>
  );
};

export default Chats;
