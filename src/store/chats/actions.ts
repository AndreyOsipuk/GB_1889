// import { AUTHOR } from 'src/constants';
// import { Dispatch } from 'redux';
// import { AddChat, AddMessage, DeleteChat, Message } from './types';

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';

// export const addChat: AddChat = (chatName) => ({
//   chatName,
//   type: ADD_CHAT,
// });

// export const deleteChat: DeleteChat = (chatId) => ({
//   chatId,
//   type: DELETE_CHAT,
// });

// export const addMessage: AddMessage = (chatId, message) => ({
//   chatId,
//   message,
//   type: ADD_MESSAGE,
// });

// let timeout: NodeJS.Timeout;

// export const addMessageWithReply =
//   (chatId: string, message: Message) =>
//   (dispatch: Dispatch<ReturnType<AddMessage>>) => {
//     dispatch(addMessage(chatId, message));

//     if (message.author !== AUTHOR.BOT) {
//       if (timeout) {
//         clearTimeout(timeout);
//       }

//       timeout = setTimeout(() => {
//         dispatch(
//           addMessage(chatId, {
//             author: AUTHOR.BOT,
//             text: 'Im BOT',
//           })
//         );
//       }, 1000);
//     }
//   };
