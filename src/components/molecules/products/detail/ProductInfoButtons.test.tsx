import { render, screen } from '@/utils/tests/renderWithTheme';
import userEvent from '@testing-library/user-event';

import ModalAlert from '@/components/organisms/modal/ModalAlert';

import ProductInfoButtons from './ProductInfoButtons';

const context = describe;

describe('ProductInfoButtons ', () => {
  const handleAddCart = jest.fn();
  const handleClickMoveOrderPage = jest.fn();
  const renderProductInfoButtons = () => {
    render(
      <>
        <ProductInfoButtons
          handleAddCart={handleAddCart}
          handleClickMoveOrderPage={handleClickMoveOrderPage}
        />
        <ModalAlert />
        ,
      </>,
    );
  };

  it('render ProductSelectBox', () => {
    renderProductInfoButtons();

    expect(screen.getByAltText(/shopping-cart-icon/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
  });

  context('when click add cart button', () => {
    it('handleAddCart should call', async () => {
      renderProductInfoButtons();

      const button = screen.getByAltText(/shopping-cart-icon/);

      await userEvent.click(button);

      expect(handleAddCart).toBeCalledTimes(1);
    });
  });

  context('when click order button', () => {
    it('handleClickMoveOrderPage should call', async () => {
      renderProductInfoButtons();

      const button = screen.getByRole('button', { name: '주문하기' });

      await userEvent.click(button);

      expect(handleClickMoveOrderPage).toBeCalledTimes(1);
    });
  });
});
