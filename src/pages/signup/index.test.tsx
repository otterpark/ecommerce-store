import { render, screen, waitForElementToBeRemoved } from '@/utils/tests/renderWithRedux';
import userEvent from '@testing-library/user-event';

// eslint-disable-next-line import/no-extraneous-dependencies
import mockRouter from 'next-router-mock';

import server from '@/mocks/server';
import { signup } from '@/mocks/handlers/user';

import ModalAlert from '@/components/organisms/modal/ModalAlert';
import SignupPage from './index.page';

const context = describe;

jest.unmock('react-redux');

describe('Signup ', () => {
  const renderSignupPage = () => {
    render(
      <>
        <SignupPage />
        <ModalAlert />
      </>,
    );
  };

  it('render page', () => {
    renderSignupPage();

    expect(screen.getByRole('heading', { name: /회원가입/ })).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/이메일/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/닉네임/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/비밀번호를 입력/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/비밀번호를 한번 더/)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: '회원 가입하기' })).toBeInTheDocument();
  });

  context('when signup success', () => {
    it('signup on password enter press', async () => {
      renderSignupPage();

      const email = screen.getByPlaceholderText(/이메일/);
      const nickname = screen.getByPlaceholderText(/닉네임/);
      const password = screen.getByPlaceholderText(/비밀번호를 입력/);
      const passwordConfirm = screen.getByPlaceholderText(/비밀번호를 한번 더/);

      await userEvent.click(email);
      await userEvent.keyboard('tester@example.com');

      await userEvent.click(nickname);
      await userEvent.keyboard('tester');

      await userEvent.click(password);
      await userEvent.keyboard('password');

      await userEvent.click(passwordConfirm);
      await userEvent.keyboard('password{enter}');

      await waitForElementToBeRemoved(() => screen.getByTestId('loading'));

      expect(mockRouter).toMatchObject({
        asPath: '/',
        pathname: '/',
        query: {},
      });
    });

    it('signup submit button click', async () => {
      renderSignupPage();

      const email = screen.getByPlaceholderText(/이메일/);
      const nickname = screen.getByPlaceholderText(/닉네임/);
      const password = screen.getByPlaceholderText(/비밀번호를 입력/);
      const passwordConfirm = screen.getByPlaceholderText(/비밀번호를 한번 더/);

      const button = screen.getByRole('button', { name: '회원 가입하기' });

      await userEvent.click(email);
      await userEvent.keyboard('tester@example.com');

      await userEvent.click(nickname);
      await userEvent.keyboard('tester');

      await userEvent.click(password);
      await userEvent.keyboard('password');

      await userEvent.click(passwordConfirm);
      await userEvent.keyboard('password');

      await userEvent.click(button);

      await waitForElementToBeRemoved(() => screen.getByTestId('loading'));

      expect(mockRouter).toMatchObject({
        asPath: '/',
        pathname: '/',
        query: {},
      });
    });
  });

  context('when user signup fail', () => {
    it('signup fail with duplicate email', async () => {
      server.use(signup('Error'));
      renderSignupPage();

      const email = screen.getByPlaceholderText(/이메일/);
      const nickname = screen.getByPlaceholderText(/닉네임/);
      const password = screen.getByPlaceholderText(/비밀번호를 입력/);
      const passwordConfirm = screen.getByPlaceholderText(/비밀번호를 한번 더/);

      const button = screen.getByRole('button', { name: '회원 가입하기' });

      await userEvent.click(email);
      await userEvent.keyboard('tester@example.com');

      await userEvent.click(nickname);
      await userEvent.keyboard('tester');

      await userEvent.click(password);
      await userEvent.keyboard('password');

      await userEvent.click(passwordConfirm);
      await userEvent.keyboard('password');

      await userEvent.click(button);

      await waitForElementToBeRemoved(() => screen.getByTestId('loading'));

      expect(screen.getByText(/중복되는 이메일/)).toBeInTheDocument();
    });
  });
});
