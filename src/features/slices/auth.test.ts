import {
  Auth, clearAuth, setAuth, authReducer,
} from './auth';

const context = describe;

describe('authSlice ', () => {
  const authInitialState: Auth = {
    isAuthenticated: false,
    accessToken: '',
  };

  it('should return the initial state', () => {
    expect(authReducer(undefined, { type: undefined })).toEqual(authInitialState);
  });

  context('when set state by action', () => {
    it('update init state data', () => {
      const updateState: Auth = { isAuthenticated: true, accessToken: '1inri4n2o31jo3k2o' };
      const action = setAuth(updateState);
      expect(authReducer(authInitialState, action)).toEqual(updateState);
    });
  });

  context('when clear state by action', () => {
    it('clear user state data', () => {
      const initState: Auth = { isAuthenticated: true, accessToken: '1inri4n2o31jo3k2o' };
      const action = clearAuth();
      expect(authReducer(initState, action)).toEqual(authInitialState);
    });
  });
});
