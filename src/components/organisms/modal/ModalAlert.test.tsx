import { render, screen } from '@/utils/tests/renderWithRedux';
import ModalAlert from './ModalAlert';

jest.unmock('react-redux');

const context = describe;

describe('ModalAlert ', () => {
  context('when alert is not active', () => {
    it('return none', () => {
      const { container } = render(<ModalAlert />);
      expect(container).toBeEmptyDOMElement();
    });
  });

  context('when alert is active', () => {
    it('return none', () => {
      render(<ModalAlert />, {
        preloadedState: {
          modal: {
            isActive: true,
            message: 'test',
          },
        },
      });

      expect(screen.getByText(/test/)).toBeInTheDocument();
    });
  });
});
