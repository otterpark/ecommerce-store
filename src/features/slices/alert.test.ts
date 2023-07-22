import {
  Alert, alertReducer, closeAlert, openAlert,
} from './alert';

const context = describe;

describe('alertSlice ', () => {
  const alertInitialState: Alert = {
    isActive: false,
    message: '',
  };

  it('should return the initial state', () => {
    expect(alertReducer(undefined, { type: undefined })).toEqual(alertInitialState);
  });

  context('when show alert message', () => {
    it('active alert', () => {
      const updateState: Alert = { isActive: true, message: 'test' };
      const action = openAlert(updateState);
      expect(alertReducer(alertInitialState, action)).toEqual(updateState);
    });
  });

  context('when close alert', () => {
    it('close modal', () => {
      const initState: Alert = { isActive: true, message: 'test' };
      const action = closeAlert();
      expect(alertReducer(initState, action)).toEqual(alertInitialState);
    });
  });
});
