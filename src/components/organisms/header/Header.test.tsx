import { render, screen, waitFor } from '@/utils/tests/renderWithTheme';
import Header from './Header';

describe('Header', () => {
  const renderHeaderComponent = () => {
    render(<Header />);
  };

  it('redner header', async () => {
    renderHeaderComponent();

    expect(screen.getByAltText(/logo/)).toBeInTheDocument();
    expect(screen.getByText('로그인')).toBeInTheDocument();
    expect(screen.getByText('회원가입')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/top/)).toBeInTheDocument();
      expect(screen.getByText(/outer/)).toBeInTheDocument();
      expect(screen.getByText(/bottom/)).toBeInTheDocument();
      expect(screen.getByText(/acc/)).toBeInTheDocument();
    });
  });
});
