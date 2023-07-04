import { render, screen } from '@/utils/tests/renderWithTheme';
import Footer from './Footer';

describe('Footer', () => {
  const renderFooterComponent = () => {
    render(<Footer />);
  };

  it('redner footer', () => {
    renderFooterComponent();

    expect(screen.getByAltText(/logo/)).toBeInTheDocument();

    expect(screen.getByText(/대표번호/)).toBeInTheDocument();
    expect(screen.getByText(/사업자등록번호/)).toBeInTheDocument();
    expect(screen.getByText(/통신판매업신고번호/)).toBeInTheDocument();
    expect(screen.getByText(/© HelloMarket Corp/)).toBeInTheDocument();
  });
});
