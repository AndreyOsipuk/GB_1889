import { ADD_CHAT, DELETE_CHAT, ADD_MESSAGE } from './actions';
import { Reducer } from 'redux';
import { ChatsActions } from './types';
import { nanoid } from 'nanoid';
import { AUTHOR } from 'src/constants';

export interface Message {
  id: string;
  author: string;
  value: string;
}

export interface ChatsState {
  [key: string]: Message[];
}

const initialState: ChatsState = {
  gb: [
    {
      id: '1',
      author: AUTHOR.USER,
      value: 'Hello geekbrains',
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
            id: nanoid(),
            author: AUTHOR.USER,
            value: action.message,
          },
        ],
      };
    }

    default:
      return state;
  }
};
