import {
  Modal, closeModal, modalReducer, openModal,
} from './modal';

const context = describe;

describe('modalSlice ', () => {
  const modalInitialState: Modal = {
    isActive: false,
    message: '',
  };

  it('should return the initial state', () => {
    expect(modalReducer(undefined, { type: undefined })).toEqual(modalInitialState);
  });

  context('when show alert message', () => {
    it('active alert', () => {
      const updateState: Modal = { isActive: true, message: 'test' };
      const action = openModal(updateState);
      expect(modalReducer(modalInitialState, action)).toEqual(updateState);
    });
  });

  context('when close alert', () => {
    it('close modal', () => {
      const initState: Modal = { isActive: true, message: 'test' };
      const action = closeModal();
      expect(modalReducer(initState, action)).toEqual(modalInitialState);
    });
  });
});
