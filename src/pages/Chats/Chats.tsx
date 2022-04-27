import React, { FC } from 'react';
import { MessageList } from '../../components/MessageList/MessageList';
import { Form } from '../../components/Form/Form';
import { ChatList } from '../../components/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { WithClasses } from 'src/HOC/WithClasses';

import style from './Chats.module.css';
import { shallowEqual, useSelector } from 'react-redux';
import { selectChatList, selectChats } from 'src/store/chats/selectors';

export const Chats: FC = () => {
  const { chatId } = useParams();

  const MessageListWithClass = WithClasses(MessageList);

  const chats = useSelector(selectChats, shallowEqual);
  const chatList = useSelector(selectChatList, shallowEqual);

  // useEffect(() => {
  //   if (
  //     chatId &&
  //     chats[chatId]?.length > 0 &&
  //     chats[chatId][chats[chatId].length - 1].author !== AUTHOR.BOT
  //   ) {
  //     const timeout = setTimeout(() => {
  //       setMessages({
  //         ...messages,
  //         [chatId]: [
  //           ...messages[chatId],
  //           {
  //             id: nanoid(),
  //             author: AUTHOR.BOT,
  //             value: 'Im BOT',
  //           },
  //         ],
  //       });
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, [chatId, messages, setMessages]);

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
