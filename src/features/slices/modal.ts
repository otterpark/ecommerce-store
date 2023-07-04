/* eslint-disable no-underscore-dangle */
import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Modal = {
  isActive: boolean;
  message: string;
}

export type OpenModalProps = Pick<Modal, 'message'>

export const modalInitialState: Modal = {
  isActive: false,
  message: '',
};

const _openModal: CaseReducer<Modal, PayloadAction<OpenModalProps>> = (state, action) => {
  const { message } = action.payload;

  return {
    ...state,
    isActive: true,
    message,
  };
};

const _closeModal: CaseReducer<Modal> = (state) => ({
  ...state,
  ...modalInitialState,
});

export const modal = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    openModal: _openModal,
    closeModal: _closeModal,
  },
});

export const { openModal, closeModal } = modal.actions;
export const modalReducer = modal.reducer;
