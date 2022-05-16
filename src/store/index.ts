import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

import { configureStore } from '@reduxjs/toolkit';

import { chatsReducer } from './chats/slice';
import { profileReducer } from './profile/slice';

export type StoreState = ReturnType<typeof rootReducer>;

const persistConfig = {
  blacklist: ['profile'],
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
