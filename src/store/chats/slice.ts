import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Message, MessageState } from './types';

import { AUTHOR } from 'src/constants';
import { nanoid } from 'nanoid';

export interface ChatState {
  [key: string]: MessageState[];
}

const initialState: ChatState = {
  gb: [
    {
      author: AUTHOR.USER,
      id: '1',
      text: 'Hello geekbrains',
    },
  ],
};

const chatsSlice = createSlice({
  initialState,
  name: 'chats',
  reducers: {
    addChat(state, action: PayloadAction<{ name: string }>) {
      state[action.payload.name] = [];
    },
    addMessage(
      state,
      action: PayloadAction<{ chatId: string; message: Message }>
    ) {
      const { chatId } = action.payload;
      const { text, author } = action.payload.message;
      state[chatId].push({
        author,
        id: nanoid(),
        text,
      });
    },
    deleteChat(state, action: PayloadAction<{ chatId: string }>) {
      delete state[action.payload.chatId];
    },
  },
});

let timeout: NodeJS.Timeout;
export const addMessageWithReply = createAsyncThunk(
  'chats/addMessageWithReply',
  async (
    { chatId, message }: { chatId: string; message: Message },
    { dispatch }
  ) => {
    dispatch(addMessage({ chatId, message }));

    if (message.author !== AUTHOR.BOT) {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        dispatch(
          addMessage({
            chatId,
            message: {
              author: AUTHOR.BOT,
              text: 'Im BOT',
            },
          })
        );
      }, 1000);
    }
  }
);

export const { addChat, addMessage, deleteChat } = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;
