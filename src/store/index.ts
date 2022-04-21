import { createStore, compose } from 'redux';
import { profileReducer } from './profile/reducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(profileReducer, composeEnhancers());
