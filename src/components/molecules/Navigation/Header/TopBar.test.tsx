import { render, screen } from '@testing-library/react';
import TopBar from './TopBar';

describe('TopBar', () => {
  it('redner Header TopBar', () => {
    render(<TopBar />);

    expect(screen.getByText(/로그인/)).toBeInTheDocument();
    expect(screen.getByText(/회원가입/)).toBeInTheDocument();
  });
});
