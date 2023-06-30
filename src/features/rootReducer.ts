import { configureStore } from '@reduxjs/toolkit';
import { authReducer, userReducer } from './slices';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
