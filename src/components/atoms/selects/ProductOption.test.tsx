import { render, screen } from '@/utils/tests/renderWithTheme';
import userEvent from '@testing-library/user-event';

import { mockProductDetail } from '@/fixtures/__mocks__/api/product';

import ProductOption from './ProductOption';

const context = describe;

describe('ProductOption ', () => {
  const mockProduct = mockProductDetail;
  const handleOptionClick = jest.fn();

  const renderProductOptionComponent = () => render(
    <ProductOption
      option={mockProduct.options[0]}
      item={mockProduct.options[0].items[0]}
      handleOptionClick={handleOptionClick}
    />,
  );

  it('render ProductOption', () => {
    renderProductOptionComponent();

    expect(screen.getByText(/white/)).toBeInTheDocument();
  });

  context('when click product option', () => {
    it('should call handleOptionClick event', async () => {
      renderProductOptionComponent();

      const option = screen.getByTestId('item-white');
      await userEvent.click(option);

      expect(handleOptionClick).toBeCalledTimes(1);
    });
  });
});
