import { Reducer } from 'redux';
import { nanoid } from 'nanoid';

import { AUTHOR } from 'src/constants';
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from './actions';
import { ChatsActions, MessageState } from './types';

export interface ChatsState {
  [key: string]: MessageState[];
}

const initialState: ChatsState = {
  gb: [
    {
      author: AUTHOR.USER,
      id: '1',
      text: 'Hello geekbrains',
    },
  ],
};

export const chatReducer: Reducer<ChatsState, ChatsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.chatName]: [],
      };
    }
    case DELETE_CHAT: {
      const chats = { ...state };
      delete chats[action.chatId];
      return chats;
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatId]: [
          ...state[action.chatId],
          {
            author: action.message.author,
            id: nanoid(),
            text: action.message.text,
          },
        ],
      };
    }

    default:
      return state;
  }
};
