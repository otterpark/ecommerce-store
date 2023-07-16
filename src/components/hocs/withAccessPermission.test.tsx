/* eslint-disable import/no-extraneous-dependencies */
import { render, screen, waitFor } from '@/utils/tests/renderWithProvider';

import mockRouter from 'next-router-mock';

import HomePage from '@/pages/index.page';
import ModalAlert from '../organisms/modal/ModalAlert';
import withAuth from './withAccessPermission';

const context = describe;

jest.unmock('react-redux');

describe('withAccessPermission', () => {
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
        expect(mockRouter).toMatchObject({
          asPath: '/',
          pathname: '/',
          query: {},
        });
      });
    });

    it('if isAuthenticated is true can access page', async () => {
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
        expect(screen.getByText(/하트자수맨투맨/)).toBeInTheDocument();
        expect(screen.getByText(/박시롱코트/)).toBeInTheDocument();
        expect(screen.getByText(/하트자수셋업조거/)).toBeInTheDocument();
        expect(screen.getByText(/EARRING Purple/)).toBeInTheDocument();
      });
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
        expect(mockRouter).toMatchObject({
          asPath: '/',
          pathname: '/',
          query: {},
        });
      });
    });

    it('if isAuthenticated is false can access page', async () => {
      render(
        <>
          <HomePageWithAuthComponent />
          <ModalAlert />
        </>,
      );

      await waitFor(() => {
        expect(screen.getByText(/하트자수맨투맨/)).toBeInTheDocument();
        expect(screen.getByText(/박시롱코트/)).toBeInTheDocument();
        expect(screen.getByText(/하트자수셋업조거/)).toBeInTheDocument();
        expect(screen.getByText(/EARRING Purple/)).toBeInTheDocument();
      });
    });
  });
});
