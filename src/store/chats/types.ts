const ADD_CHAT = 'CHATS::ADD_CHAT';
const DELETE_CHAT = 'CHATS::DELETE_CHAT';
const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';

export type ChatsActions =
  | ReturnType<AddChat>
  | ReturnType<DeleteChat>
  | ReturnType<AddMessage>;

export type Message = {
  text: string;
  author: string;
};

export type MessageState = Message & {
  id: string;
};

export type AddChat = (chatName: string) => {
  type: typeof ADD_CHAT;
  chatName: string;
};

export type DeleteChat = (chatId: string) => {
  type: typeof DELETE_CHAT;
  chatId: string;
};

export type AddMessage = (
  chatId: string,
  message: Message
) => {
  type: typeof ADD_MESSAGE;
  chatId: string;
  message: Message;
};
