import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ProfileState {
  visible: boolean;
  name: string;
  auth: boolean;
}

const initialState: ProfileState = {
  auth: false,
  name: 'default name',
  visible: true,
};

const profileSlice = createSlice({
  initialState,
  name: 'profile',
  reducers: {
    changeAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    toggleProfile: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { changeAuth, toggleProfile, changeName } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
