import { render, screen } from '@testing-library/react';
import MainBar from './MainBar';

describe('MainBar', () => {
  it('redner header MainBar', () => {
    render(<MainBar />);

    expect(screen.getByText(/Products/)).toBeInTheDocument();
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
