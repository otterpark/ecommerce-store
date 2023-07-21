import { render, screen } from '@/utils/tests/renderWithTheme';

import userEvent from '@testing-library/user-event';

import ProductInfoButtons from './ProductInfoButtons';

const context = describe;

describe('ProductInfoButtons ', () => {
  const handleAddCart = jest.fn();
  const renderProductInfoButtons = () => {
    render(<ProductInfoButtons handleAddCart={handleAddCart} />);
  };

  it('render ProductSelectBox', () => {
    renderProductInfoButtons();

    expect(screen.getByAltText(/shopping-cart-icon/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
  });

  context('when click add cart button', () => {
    it('handleAddCat should call', async () => {
      renderProductInfoButtons();

      const button = screen.getByAltText(/shopping-cart-icon/);

      await userEvent.click(button);

      expect(handleAddCart).toBeCalledTimes(1);
    });
  });
});
