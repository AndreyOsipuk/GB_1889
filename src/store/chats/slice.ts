import { nanoid } from 'nanoid';
import { onValue } from 'firebase/database';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Message, MessageState } from './types';

import { AUTHOR } from 'src/constants';
import { chatsRef } from 'src/services/firebase';

export interface ChatState {
  [key: string]: {
    id: string;
    name: string;
    messageList: {
      [key: string]: MessageState;
    };
  };
}

const initialState: ChatState = {};

const chatsSlice = createSlice({
  initialState,
  name: 'chats',
  reducers: {
    // addChat(state, action: PayloadAction<{ name: string }>) {
    //   state[action.payload.name] = [];
    // },
    // addMessage(
    //   state,
    //   action: PayloadAction<{ chatId: string; message: Message }>
    // ) {
    //   const { chatId } = action.payload;
    //   const { text, author } = action.payload.message;
    //   state[chatId].push({
    //     author,
    //     id: nanoid(),
    //     text,
    //   });
    // },
    // deleteChat(state, action: PayloadAction<{ chatId: string }>) {
    //   delete state[action.payload.chatId];
    // },
    setState(state, action: PayloadAction<{ state: ChatState }>) {
      return { ...action.payload.state };
    },
  },
});

// let timeout: NodeJS.Timeout;
// export const addMessageWithReply = createAsyncThunk(
//   'chats/addMessageWithReply',
//   async (
//     { chatId, message }: { chatId: string; message: Message },
//     { dispatch }
//   ) => {
//     dispatch(addMessage({ chatId, message }));

//     if (message.author !== AUTHOR.BOT) {
//       if (timeout) {
//         clearTimeout(timeout);
//       }

//       timeout = setTimeout(() => {
//         dispatch(
//           addMessage({
//             chatId,
//             message: {
//               author: AUTHOR.BOT,
//               text: 'Im BOT',
//             },
//           })
//         );
//       }, 1000);
//     }
//   }
// );

export const initialMessagesFB = createAsyncThunk(
  'chats/initialMessagesFB',
  (data, { dispatch }) => {
    onValue(chatsRef, (snapshot) => {
      const newState = snapshot.val();
      dispatch(setState({ state: newState }));
    });
  }
);

export const { setState } = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;
