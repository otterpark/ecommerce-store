import { render, screen } from '@/utils/tests/renderWithTheme';
import ModalContent from './ModalContent';

describe('content ', () => {
  const message = 'test';
  it('render modal content', () => {
    render(<ModalContent message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
