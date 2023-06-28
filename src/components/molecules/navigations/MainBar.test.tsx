import { render, screen } from '@/utils/tests/wrapThemeProvider';
import MainBar from './MainBar';

describe('MainBar', () => {
  it('redner header mainbar', () => {
    render(<MainBar />);

    expect(screen.getByText(/Products/)).toBeInTheDocument();
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
