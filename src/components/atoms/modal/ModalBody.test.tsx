import { render, screen } from '@/utils/tests/renderWithTheme';
import Logo from '../Logo';
import ModalBody from './ModalBody';

describe('ModalBody ', () => {
  it('render ModalBody', () => {
    render(<ModalBody body={<Logo />} />);

    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
