import {
  User, clearUser, setUser, userReducer,
} from './user';

const context = describe;

describe('userSlice ', () => {
  const userInitialState: User = {
    id: '',
    name: '',
  };

  it('should return the initial state', () => {
    expect(userReducer(undefined, { type: undefined })).toEqual(userInitialState);
  });

  context('when set state by action', () => {
    it('update init state data', () => {
      const updateState: User = { id: '3idfken1k', name: '진우팍' };
      const action = setUser(updateState);
      expect(userReducer(userInitialState, action)).toEqual(updateState);
    });
  });

  context('when clear state by action', () => {
    it('clear user state data', () => {
      const initState: User = { id: '3idfken1k', name: '진우팍' };
      const action = clearUser();
      expect(userReducer(initState, action)).toEqual(userInitialState);
    });
  });
});
