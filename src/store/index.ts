import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import { chatReducer } from './chats/reducer';
import { configureStore } from '@reduxjs/toolkit';
import { profileReducer } from './profile/slice';

export type StoreState = ReturnType<typeof rootReducer>;

const persistConfig = {
  blacklist: ['profile'],
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  chats: chatReducer,
  profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
