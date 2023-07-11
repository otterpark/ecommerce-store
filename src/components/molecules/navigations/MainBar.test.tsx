import { render, screen, waitFor } from '@/utils/tests/renderWithTheme';
import MainBar from './MainBar';

describe('MainBar', () => {
  it('redner header mainbar', async () => {
    render(<MainBar />);

    expect(screen.getByAltText('logo')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/top/)).toBeInTheDocument();
      expect(screen.getByText(/outer/)).toBeInTheDocument();
      expect(screen.getByText(/bottom/)).toBeInTheDocument();
      expect(screen.getByText(/acc/)).toBeInTheDocument();
    });
  });
});
