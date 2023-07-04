import { render, screen } from '@/utils/tests/renderWithTheme';
import TopBar from './TopBar';

describe('TopBar', () => {
  it('redner header topbar', () => {
    render(<TopBar />);

    expect(screen.getByText(/로그인/)).toBeInTheDocument();
    expect(screen.getByText(/회원가입/)).toBeInTheDocument();
  });
});
