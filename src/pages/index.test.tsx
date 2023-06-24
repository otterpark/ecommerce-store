import { render, screen } from '@/utils/tests/wrapThemeProvider';
import Home from '.';

describe('Home ', () => {
  it('render test', () => {
    render(<Home />);

    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
