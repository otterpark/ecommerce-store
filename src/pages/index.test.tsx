import { render, screen } from '@testing-library/react';
import Home from '.';

describe('Home ', () => {
  it('render test', () => {
    render(<Home />);

    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
