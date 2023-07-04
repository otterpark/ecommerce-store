import userEvent from '@testing-library/user-event';

import { render, screen } from '@/utils/tests/renderWithProvider';

import SignupForm from './SignupForm';

jest.unmock('react-redux');

const context = describe;

describe('SignupForm ', () => {
  const handleSubmit = jest.fn();
  const renderSignupForm = () => {
    render(<SignupForm />);
  };

  beforeEach(() => {
    handleSubmit.mockClear();
  });

  it('render component', () => {
    renderSignupForm();

    expect(screen.getByPlaceholderText(/이메일/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/닉네임/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/비밀번호를 입력/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/비밀번호를 한번 더/)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: '회원 가입하기' })).toBeInTheDocument();
  });

  context('when form is not valid', () => {
    it('button is not active', async () => {
      renderSignupForm();

      const email = screen.getByPlaceholderText(/이메일/);
      const nickname = screen.getByPlaceholderText(/닉네임/);
      const password = screen.getByPlaceholderText(/비밀번호를 입력/);
      const passwordConfirm = screen.getByPlaceholderText(/비밀번호를 한번 더/);

      const button = screen.getByRole('button', { name: '회원 가입하기' });
      screen.getByRole('form').onsubmit = handleSubmit;

      // email
      await userEvent.type(email, 'wlsdntus2@naver.com');
      await userEvent.click(button);
      expect(handleSubmit).toBeCalledTimes(0);

      // nickname
      await userEvent.type(nickname, '진우팍');
      await userEvent.click(button);
      expect(handleSubmit).toBeCalledTimes(0);

      // password
      await userEvent.type(password, 'password');
      await userEvent.click(button);
      expect(handleSubmit).toBeCalledTimes(0);

      // password confirm check
      await userEvent.type(passwordConfirm, 'password1');
      await userEvent.click(button);
      expect(handleSubmit).toBeCalledTimes(0);

      // email 양식 check
      await userEvent.type(email, 'wlsdntus2@naver');
      await userEvent.type(passwordConfirm, 'password');
      await userEvent.click(button);
      expect(handleSubmit).toBeCalledTimes(0);

      await userEvent.type(email, 'wlsdntus2@naver.com');
      await userEvent.type(passwordConfirm, 'password2');
      await userEvent.click(button);
      expect(handleSubmit).toBeCalledTimes(0);
    });
  });
  context('when form is valid', () => {
    it('button is active', async () => {
      renderSignupForm();

      const email = screen.getByPlaceholderText(/이메일/);
      const nickname = screen.getByPlaceholderText(/닉네임/);
      const password = screen.getByPlaceholderText(/비밀번호를 입력/);
      const passwordConfirm = screen.getByPlaceholderText(/비밀번호를 한번 더/);

      const button = screen.getByRole('button', { name: '회원 가입하기' });
      screen.getByRole('form').onsubmit = handleSubmit;

      await userEvent.type(email, 'wlsdntus2@naver.com');
      await userEvent.type(nickname, '진우팍');
      await userEvent.type(password, 'password');
      await userEvent.type(passwordConfirm, 'password');
      await userEvent.click(button);
      expect(handleSubmit).toBeCalledTimes(1);
    });
  });
});
