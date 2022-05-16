import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import React, { FC, useEffect } from 'react';
import { onValue, push } from 'firebase/database';

import { ChatList } from '../../components/ChatList';
import { Form } from '../../components/Form/Form';
import { MessageList } from '../../components/MessageList/MessageList';

import { StoreState } from 'src/store';
import { WithClasses } from 'src/HOC/WithClasses';
import { selectChat, selectChats } from 'src/store/chats/selectors';

import style from './Chats.module.css';

import { AUTHOR } from 'src/constants';
import { getChatsById, getMessageListById } from 'src/services/firebase';
// import { onValue } from 'firebase/database';
// import { MessageState } from 'src/store/chats/types';
// import { chatsRef, getChatsById } from 'src/services/firebase';
// import { nanoid } from 'nanoid';

export const Chats: FC = () => {
  const { chatId } = useParams();

  const MessageListWithClass = WithClasses(MessageList);

  const messages = useSelector((state: StoreState) =>
    selectChat(state, chatId || '')
  );
  const chats = useSelector(selectChats);
  // const chatList = useSelector(selectChatList, shallowEqual);

  useEffect(() => {
    if (chatId) {
      onValue(getChatsById(chatId), (snapshot) => {
        const chat = snapshot.val();
        const lastMessage: any = Object.entries(chat.messageList)[
          Object.entries(chat.messageList).length - 2
        ][1];

        if (lastMessage.author !== 'BOT') {
          push(getMessageListById(chatId), {
            author: AUTHOR.BOT,
            id: nanoid(),
            text: 'Im BOT',
          });
        }
      });
    }
  }, []);

  if (chatId && !chats[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <>
      <ChatList />
      {/* <MessageList messages={chatId ? messages[chatId] : []} /> */}
      <MessageListWithClass
        messages={chatId ? messages : []}
        classes={style.border}
      />
      <Form />
    </>
  );
};

export default Chats;
