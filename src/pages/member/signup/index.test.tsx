import { render, screen } from '@/utils/tests/wrapThemeProvider';
import SignupPage from '.';

describe('Signup ', () => {
  it('render page', () => {
    render(<SignupPage />);

    expect(screen.getByRole('heading', { name: /회원가입/ })).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/이메일/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/닉네임/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/비밀번호를 입력/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/비밀번호를 한번 더/)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: '회원 가입하기' })).toBeInTheDocument();
  });
});
