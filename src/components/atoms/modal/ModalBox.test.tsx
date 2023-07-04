import { render, screen } from '@/utils/tests/renderWithTheme';
import ModalBox from './ModalBox';
import Button from '../buttons/Button';

describe('ModalBox', () => {
  it('render ModalBox', () => {
    render(
      <ModalBox>
        <Button>확인</Button>
      </ModalBox>,
    );
    expect(screen.getByRole('button', { name: '확인' })).toBeInTheDocument();
  });
});
