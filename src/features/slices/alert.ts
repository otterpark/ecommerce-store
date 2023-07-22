/* eslint-disable no-underscore-dangle */
import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Alert = {
  isActive: boolean;
  message: string;
}

type OpenAlertProps = Pick<Alert, 'message'>;

export const alertInitialState: Alert = {
  isActive: false,
  message: '',
};

const _openAlert: CaseReducer<Alert, PayloadAction<OpenAlertProps>> = (state, action) => {
  const { message } = action.payload;

  return {
    ...state,
    isActive: true,
    message,
  };
};

const _closeAlert: CaseReducer<Alert> = (state) => ({
  ...state,
  ...alertInitialState,
});

export const alert = createSlice({
  name: 'alert',
  initialState: alertInitialState,
  reducers: {
    openAlert: _openAlert,
    closeAlert: _closeAlert,
  },
});

export const { openAlert, closeAlert } = alert.actions;
export const alertReducer = alert.reducer;
