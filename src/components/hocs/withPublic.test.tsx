import { render, screen, waitFor } from '@/utils/tests/renderWithProvider';

import { mockPush } from '@/fixtures/__mocks__/jest/nextRouter';

import HomePage from '@/pages';
import ModalAlert from '../organisms/modal/ModalAlert';
import withPublic from './withPublic';

const context = describe;

jest.unmock('react-redux');

describe('withPublic', () => {
  const HomePageWithAuthComponent = withPublic(HomePage);
  context('when render with hoc withPublic', () => {
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
