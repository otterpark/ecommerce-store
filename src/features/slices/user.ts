/* eslint-disable no-underscore-dangle */
import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';

export type User = {
  id: string;
  name: string;
}

const userInitialState: User = {
  id: '',
  name: '',
};

const _setUser: CaseReducer<User, PayloadAction<User>> = (state, action) => {
  const { id, name } = action.payload;
  return {
    ...state,
    id,
    name,
  };
};

const _clearUser: CaseReducer<User> = (state) => ({
  ...state,
  ...userInitialState,
});

export const user = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUser: _setUser,
    clearUser: _clearUser,
  },
});

export const { setUser, clearUser } = user.actions;
export const userReducer = user.reducer;
