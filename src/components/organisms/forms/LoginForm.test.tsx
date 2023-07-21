import userEvent from '@testing-library/user-event';

import { render, screen } from '@/utils/tests/renderWithRedux';

import LoginForm from './LoginForm';

jest.unmock('react-redux');

const context = describe;

describe('LoginForm ', () => {
  const handleSubmit = jest.fn();
  const renderLoginForm = () => {
    render(<LoginForm />);
  };

  beforeEach(() => {
    handleSubmit.mockClear();
  });

  it('render component', () => {
    renderLoginForm();

    expect(screen.getByRole('heading', { name: /로그인/ })).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/이메일/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/비밀번호/)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: '로그인' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '회원가입' })).toBeInTheDocument();
  });

  context('when form is not valid', () => {
    it('button is not active', async () => {
      renderLoginForm();

      const email = screen.getByPlaceholderText(/이메일/);
      const password = screen.getByPlaceholderText(/비밀번호/);

      const button = screen.getByRole('button', { name: '로그인' });
      screen.getByRole('form').onsubmit = handleSubmit;

      await userEvent.type(email, 'dkdnkfnknsk');
      await userEvent.click(button);
      expect(handleSubmit).toBeCalledTimes(0);

      await userEvent.type(password, 'snfknekn');
      expect(handleSubmit).toBeCalledTimes(0);

      await userEvent.type(email, 'snfknekn@nae');
      expect(handleSubmit).toBeCalledTimes(0);
    });
  });

  context('when form is valid', () => {
    it('button is active', async () => {
      renderLoginForm();

      const email = screen.getByPlaceholderText(/이메일/);
      const password = screen.getByPlaceholderText(/비밀번호/);

      const button = screen.getByRole('button', { name: '로그인' });
      screen.getByRole('form').onsubmit = handleSubmit;

      await userEvent.type(email, 'snfknekn@naver.com');
      await userEvent.type(password, 'sknknfs');
      await userEvent.click(button);

      expect(handleSubmit).toBeCalledTimes(1);
    });
  });
});
