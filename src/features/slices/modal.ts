/* eslint-disable no-underscore-dangle */
import { ReactElement, ReactNode } from 'react';
import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Modal = {
  isActive: boolean;
  title?: string;
  body?: ReactElement | null;
  footer?: ReactElement | null;
}

export const modalInitialState: Modal = {
  isActive: false,
  title: '',
  body: null,
  footer: null,
};

export type ModalContent = Omit<Modal, 'isActive'>

const _openModal: CaseReducer<Modal, PayloadAction<ModalContent>> = (state, action) => {
  const { title, body, footer } = action.payload;

  return {
    ...state,
    isActive: true,
    title,
    body,
    footer,
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
