/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

import { authReducer, modalReducer } from './slices';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    preloadedState,
  });
}

export const store = setupStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
