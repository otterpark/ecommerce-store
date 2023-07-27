import { render, screen } from '@/utils/tests/renderWithTheme';

import userEvent from '@testing-library/user-event';
import ModalHeader from './ModalHeader';

const context = describe;

describe('ModalHeader', () => {
  const onClickClose = jest.fn();
  const renderModalHeader = (title = '') => {
    render(
      <ModalHeader
        title={title}
        onClickClose={onClickClose}
      />,
    );
  };

  context('when render modalHeader without title', () => {
    it('can not see title', () => {
      renderModalHeader();

      expect(screen.getByAltText(/close-icon/)).toBeInTheDocument();
    });
  });

  context('when render modalHeader with title', () => {
    it('can see title', () => {
      renderModalHeader('headerTitle');

      expect(screen.getByText(/headerTitle/)).toBeInTheDocument();
      expect(screen.getByAltText(/close-icon/)).toBeInTheDocument();
    });
  });

  context('when click close button', () => {
    it('should call click event', async () => {
      renderModalHeader();

      const closeIcon = screen.getByAltText(/close-icon/);

      await userEvent.click(closeIcon);
      expect(onClickClose).toBeCalledTimes(1);
    });
  });
});
