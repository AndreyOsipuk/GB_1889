import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ProfileState } from './profile/slice';
import { chatReducer, ChatsState } from './chats/reducer';
import { configureStore } from '@reduxjs/toolkit';
import { profileReducer } from './profile/slice';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  profile: ProfileState;
  chats: ChatsState;
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['profile'],
};

const rootReducer = combineReducers<StoreState>({
  profile: profileReducer,
  chats: chatReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
