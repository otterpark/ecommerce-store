import { mockUseDispatch } from '@/fixtures/__mocks__/jest/reactRedux';

import useAuth from './useAuth';

const context = describe;

describe('useAuth', () => {
  beforeEach(() => {
    mockUseDispatch.mockClear();
  });

  context('when hook method', () => {
    it('use setAuth method', () => {
      const { updateAuth } = useAuth();
      updateAuth('accessToken');

      expect(mockUseDispatch).toBeCalledTimes(1);
    });

    it('use setUserInfo method', () => {
      const { updateUserInfo } = useAuth();
      updateUserInfo({ id: 'userId', name: '진우팍' });

      expect(mockUseDispatch).toBeCalledTimes(1);
    });

    it('use clearAuth method', () => {
      const { resetAuth } = useAuth();
      resetAuth();

      expect(mockUseDispatch).toBeCalledTimes(1);
    });
  });
});
