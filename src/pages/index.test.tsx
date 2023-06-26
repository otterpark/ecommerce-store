import { render, screen } from '@/utils/tests/wrapThemeProvider';
import Home from '.';

describe('HomePage ', () => {
  it('render page', () => {
    render(<Home />);

    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
