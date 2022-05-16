import { StoreState } from '..';

export const selectChats = (state: StoreState) => state.chats;

export const selectChat = (state: StoreState, chatId: string) =>
  Object.entries(state.chats[chatId].messageList)
    .filter((item) => item[0] !== 'empty')
    .map((messages) => ({
      ...messages[1],
    }));

export const selectChatList = (state: StoreState) =>
  Object.entries(state.chats).map((chat) => ({
    id: chat[0],
    name: chat[1].name,
  }));
