import { render, screen, waitFor } from '@/utils/tests/renderWithProvider';

import { mockPush } from '@/fixtures/__mocks__/jest/nextRouter';

import HomePage from '@/pages';
import ModalAlert from '../organisms/modal/ModalAlert';
import withAuth from './withAccessPermission';

const context = describe;

jest.unmock('react-redux');

describe('withAccessPermission', () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  context('when render hoc withAccessPermission with type auth', () => {
    const HomePageWithAuthComponent = withAuth(HomePage, 'auth');

    it('if isAuthenticated is false cannot access page', async () => {
      render(
        <>
          <HomePageWithAuthComponent />
          <ModalAlert />
        </>,
      );

      await waitFor(() => {
        expect(screen.getByText(/접근 권한이 없거나 잘못된 접근입니다./)).toBeInTheDocument();
        expect(mockPush).toBeCalledTimes(1);
      });
    });

    it('if isAuthenticated is true can access page', () => {
      render(
        <>
          <HomePageWithAuthComponent />
          <ModalAlert />
        </>,
        {
          preloadedState: {
            auth: {
              isAuthenticated: true,
              accessToken: 'accessToken',
              userInfo: { id: '', name: '' },
            },
          },
        },
      );

      expect(screen.getByText(/Hello World!/)).toBeInTheDocument();
    });
  });

  context('when render hoc withAccessPermission with type public', () => {
    const HomePageWithAuthComponent = withAuth(HomePage, 'public');

    it('if isAuthenticated is true cannot access page', async () => {
      render(
        <>
          <HomePageWithAuthComponent />
          <ModalAlert />
        </>,
        {
          preloadedState: {
            auth: {
              isAuthenticated: true,
              accessToken: 'accessToken',
              userInfo: { id: '', name: '' },
            },
          },
        },
      );

      await waitFor(() => {
        expect(screen.getByText(/접근 권한이 없거나 잘못된 접근입니다./)).toBeInTheDocument();
        expect(mockPush).toBeCalledTimes(1);
      });
    });

    it('if isAuthenticated is false can access page', () => {
      render(
        <>
          <HomePageWithAuthComponent />
          <ModalAlert />
        </>,
      );

      expect(screen.getByText(/Hello World!/)).toBeInTheDocument();
    });
  });
});
