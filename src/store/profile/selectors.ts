import { StoreState } from '..';

export const selectVisible = (state: StoreState) => state.profile.visible;

export const selectName = (state: StoreState) => state.profile.name;

export const selectAuth = (state: StoreState) => state.profile.auth;
