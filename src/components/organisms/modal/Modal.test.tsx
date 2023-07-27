import { render, screen, waitFor } from '@/utils/tests/renderWithRedux';

import Button from '@/components/atoms/buttons/Button';

import Modal from './Modal';

jest.unmock('react-redux');

const context = describe;

describe('Modal ', () => {
  context('when alert is not active', () => {
    it('return none', () => {
      const { container } = render(<Modal />);
      expect(container).toBeEmptyDOMElement();
    });
  });

  context('when alert is active', () => {
    it('return none', async () => {
      render(<Modal />, {
        preloadedState: {
          modal: {
            isActive: true,
            title: 'modalTitle',
            body: <Button>test</Button>,
          },
        },
      });

      await waitFor(() => {
        expect(screen.getByText(/modalTitle/)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /test/ })).toBeInTheDocument();
      });
    });
  });
});
