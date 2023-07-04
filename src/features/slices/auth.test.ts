import {
  Auth, clearAuth, setAuth, authReducer, AuthOnly, User, setUserInfo,
} from './auth';

const context = describe;

describe('authSlice ', () => {
  const authInitialState: Auth = {
    isAuthenticated: false,
    accessToken: '',
    userInfo: {
      id: '',
      name: '',
    },
  };

  it('should return the initial state', () => {
    expect(authReducer(undefined, { type: undefined })).toEqual(authInitialState);
  });

  context('when set state by setAuth action', () => {
    it('update initialState to updateState auth data', () => {
      const updateState: AuthOnly = { isAuthenticated: true, accessToken: '1inri4n2o31jo3k2o' };
      const action = setAuth(updateState);

      expect(authReducer(authInitialState, action)).toEqual({
        ...authInitialState,
        ...updateState,
      });
    });
  });

  context('when set state by setUserInfo action', () => {
    it('update initialState to updateState userInfo data', () => {
      const updateState: User = { id: '2k2nk4n1km2', name: '진우팍' };
      const action = setUserInfo(updateState);

      expect(authReducer(authInitialState, action).userInfo).toEqual(updateState);
    });
  });

  context('when clear state by action', () => {
    it('clear user state data', () => {
      const initState: Auth = { isAuthenticated: true, accessToken: '1inri4n2o31jo3k2o', userInfo: { id: '2k2nk4n1km2', name: '진우팍' } };
      const action = clearAuth();
      expect(authReducer(initState, action)).toEqual(authInitialState);
    });
  });
});
