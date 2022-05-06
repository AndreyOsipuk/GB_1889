import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ProfileState {
  visible: boolean;
  name: string;
}

const initialState: ProfileState = {
  name: 'default name',
  visible: true,
};

const profileSlice = createSlice({
  initialState,
  name: 'profile',
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    toggleProfile: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { toggleProfile, changeName } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
