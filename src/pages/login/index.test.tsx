import {
  render, screen, waitForElementToBeRemoved,
} from '@/utils/tests/renderWithProvider';
import userEvent from '@testing-library/user-event';

// eslint-disable-next-line import/no-extraneous-dependencies
import mockRouter from 'next-router-mock';

import server from '@/mocks/server';
import { getUserInfo, login } from '@/mocks/handlers/user';

import ModalAlert from '@/components/organisms/modal/ModalAlert';
import LoginPage from './index.page';

jest.unmock('react-redux');

const context = describe;

describe('LoginPage ', () => {
  const renderLoginPage = () => {
    const { store } = render(
      <>
        <LoginPage />
        <ModalAlert />
      </>,

    );
    return store;
  };

  it('render page', () => {
    renderLoginPage();

    expect(screen.getByRole('heading', { name: /로그인/ })).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/이메일/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/비밀번호/)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: '로그인' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '회원가입' })).toBeInTheDocument();
  });

  context('when user login success', () => {
    it('login on password enter press', async () => {
      const store = renderLoginPage();

      const email = screen.getByPlaceholderText(/이메일/);
      const password = screen.getByPlaceholderText(/비밀번호/);

      await userEvent.click(email);
      await userEvent.keyboard('tester@example.com');

      await userEvent.click(password);
      await userEvent.keyboard('password{enter}');

      await waitForElementToBeRemoved(() => screen.getByTestId('loading'));

      expect(store.getState().auth.accessToken).toBe('accessToken');
      expect(store.getState().auth.isAuthenticated).toBeTruthy();

      expect(store.getState().auth.userInfo.id).toBe('userId');
      expect(store.getState().auth.userInfo.name).toBe('진우팍');

      expect(mockRouter).toMatchObject({
        asPath: '/',
        pathname: '/',
        query: {},
      });
    });

    it('login submit button click', async () => {
      const store = renderLoginPage();

      const email = screen.getByPlaceholderText(/이메일/);
      const password = screen.getByPlaceholderText(/비밀번호/);

      const submitButton = screen.getByRole('button', { name: '로그인' });

      await userEvent.click(email);
      await userEvent.keyboard('tester@example.com');

      await userEvent.click(password);
      await userEvent.keyboard('password');

      await userEvent.click(submitButton);

      await waitForElementToBeRemoved(() => screen.getByTestId('loading'));

      expect(store.getState().auth.accessToken).toBe('accessToken');
      expect(store.getState().auth.isAuthenticated).toBeTruthy();

      expect(store.getState().auth.userInfo.id).toBe('userId');
      expect(store.getState().auth.userInfo.name).toBe('진우팍');

      expect(mockRouter).toMatchObject({
        asPath: '/',
        pathname: '/',
        query: {},
      });
    });
  });

  context('when user login fail', () => {
    it('login fail with wrong email, password', async () => {
      server.use(login('Error'));
      renderLoginPage();

      const email = screen.getByPlaceholderText(/이메일/);
      const password = screen.getByPlaceholderText(/비밀번호/);

      const submitButton = screen.getByRole('button', { name: '로그인' });

      await userEvent.click(email);
      await userEvent.keyboard('tester@example.com');

      await userEvent.click(password);
      await userEvent.keyboard('password');

      await userEvent.click(submitButton);

      await waitForElementToBeRemoved(() => screen.getByTestId('loading'));

      expect(screen.getByText(/회원정보를 찾을 수 없습니다/)).toBeInTheDocument();
    });

    it('login fail with invalid token', async () => {
      server.use(getUserInfo('Error'));
      renderLoginPage();

      const email = screen.getByPlaceholderText(/이메일/);
      const password = screen.getByPlaceholderText(/비밀번호/);

      const submitButton = screen.getByRole('button', { name: '로그인' });

      await userEvent.click(email);
      await userEvent.keyboard('tester@example.com');

      await userEvent.click(password);
      await userEvent.keyboard('password');

      await userEvent.click(submitButton);

      await waitForElementToBeRemoved(() => screen.getByTestId('loading'));

      expect(screen.getByText(/유효하지 않는 토큰입니다/)).toBeInTheDocument();
    });
  });
});
