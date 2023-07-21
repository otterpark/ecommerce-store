import { render, screen } from '@/utils/tests/renderWithTheme';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  const message = '에러 메세지가 뜹니다.';
  it('render ErrorMessage', () => {
    render(<ErrorMessage message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
