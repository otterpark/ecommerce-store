import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  const renderHeaderComponent = () => {
    render(<Header />);
  };

  it('redner header', () => {
    renderHeaderComponent();

    expect(screen.getByAltText(/logo/)).toBeInTheDocument();
    expect(screen.getByText('로그인')).toBeInTheDocument();
    expect(screen.getByText('회원가입')).toBeInTheDocument();
    expect(screen.getByText(/Products/)).toBeInTheDocument();
  });
});
