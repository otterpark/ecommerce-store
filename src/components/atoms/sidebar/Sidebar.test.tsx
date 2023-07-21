import { render, screen } from '@/utils/tests/renderWithTheme';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  const renderSidebar = () => render(<Sidebar>sidebar</Sidebar>);

  it('render sidebar', () => {
    renderSidebar();

    expect(screen.getByText(/sidebar/)).toBeInTheDocument();
  });
});
