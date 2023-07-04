/* eslint-disable no-underscore-dangle */
import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';

export type User = {
  id: string;
  name: string;
}

export type Auth = {
  isAuthenticated: boolean;
  accessToken: string;
  userInfo: User;
}

export type AuthOnly = Pick<Auth, 'isAuthenticated' | 'accessToken'>;

const authInitialState: Auth = {
  isAuthenticated: false,
  accessToken: '',
  userInfo: {
    id: '',
    name: '',
  },
};

const _setAuth: CaseReducer<Auth, PayloadAction<AuthOnly>> = (state, action) => {
  const { isAuthenticated, accessToken } = action.payload;

  return {
    ...state,
    isAuthenticated,
    accessToken,
  };
};

const _setUserInfo: CaseReducer<Auth, PayloadAction<User>> = (state, action) => {
  const { id, name } = action.payload;

  return {
    ...state,
    userInfo: {
      id,
      name,
    },
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
    setUserInfo: _setUserInfo,
    clearAuth: _clearAuth,
  },
});

export const { setAuth, setUserInfo, clearAuth } = auth.actions;
export const authReducer = auth.reducer;
