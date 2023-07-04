import { render, screen } from '@/utils/tests/renderWithTheme';
import ModalFooter from './ModalFooter';
import Button from '../buttons/Button';

describe('ModalFooter ', () => {
  const button = <Button>확인</Button>;
  it('render ModalBody', () => {
    render(<ModalFooter footer={button} />);

    expect(screen.getByRole('button', { name: '확인' })).toBeInTheDocument();
  });
});
