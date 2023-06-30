/* eslint-disable no-underscore-dangle */
import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Auth = {
  isAuthenticated: boolean;
  accessToken: string;
}

const authInitialState: Auth = {
  isAuthenticated: false,
  accessToken: '',
};

const _setAuth: CaseReducer<Auth, PayloadAction<Auth>> = (state, action) => {
  const { isAuthenticated, accessToken } = action.payload;

  return {
    ...state,
    isAuthenticated,
    accessToken,
  };
};

const _clearAuth: CaseReducer<Auth> = (state) => ({
  ...state,
  ...authInitialState,
});

export const auth = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setAuth: _setAuth,
    clearAuth: _clearAuth,
  },
});

export const { setAuth, clearAuth } = auth.actions;
export const authReducer = auth.reducer;
