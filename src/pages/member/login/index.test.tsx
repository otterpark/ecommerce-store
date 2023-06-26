import { render, screen } from '@/utils/tests/wrapThemeProvider';
import LoginPage from '.';

describe('LoginPage ', () => {
  it('render page', () => {
    render(<LoginPage />);

    expect(screen.getByRole('heading', { name: /로그인/ })).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/이메일/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/비밀번호/)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: '로그인' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '회원가입' })).toBeInTheDocument();
  });
});
