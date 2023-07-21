import { render, screen, waitFor } from '@/utils/tests/renderWithSWR';
import userEvent from '@testing-library/user-event';

import { mockProductDetail } from '@/fixtures/__mocks__/api/product';

import ProductDetail from './ProductDetail';

const context = describe;

describe('ProductDetail', () => {
  const mockProduct = mockProductDetail;
  const handleAddCart = jest.fn();

  const renderProductsDetail = () => {
    render(<ProductDetail productId={mockProduct.id} />);
  };

  beforeEach(() => {
    handleAddCart.mockClear();
  });

  it('can see product detail', async () => {
    renderProductsDetail();

    await waitFor(() => {
      expect(screen.getByAltText(/CBCL 사틴셔츠/)).toBeInTheDocument();
      expect(screen.getByText(/CBCL 사틴셔츠/)).toBeInTheDocument();
      expect(screen.getByText(/화이트 실크 소재의 살랑거리는 블라우스/)).toBeInTheDocument();

      expect(screen.getByText(/컬러/)).toBeInTheDocument();
      expect(screen.getByText(/사이즈/)).toBeInTheDocument();
      expect(screen.getByText(/상품 수량/)).toBeInTheDocument();
      expect(screen.getByText(/총 상품금액/)).toBeInTheDocument();

      expect(screen.getByAltText(/shopping-cart/)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
    });
  });

  context('when user click increase quantity button', () => {
    it('should increase quauntity', async () => {
      renderProductsDetail();

      await waitFor(async () => {
        const plusIcon = screen.getByAltText('plus-icon');
        await userEvent.click(plusIcon);

        expect(screen.getByLabelText('quantity')).toHaveValue('2');
      });
    });
  });

  context('when user click decrease quantity button', () => {
    it('if quantity is "1", quantity should be "1"', async () => {
      renderProductsDetail();

      await waitFor(async () => {
        const minusIcon = screen.getByAltText('minus-icon');
        await userEvent.click(minusIcon);

        expect(screen.getByLabelText('quantity')).toHaveValue('1');
      });
    });

    it('should decrease quauntity', async () => {
      renderProductsDetail();

      await waitFor(async () => {
        const plusIcon = screen.getByAltText('plus-icon');
        await userEvent.click(plusIcon);

        expect(screen.getByLabelText('quantity')).toHaveValue('2');

        const minusIcon = screen.getByAltText('minus-icon');
        await userEvent.click(minusIcon);

        expect(screen.getByLabelText('quantity')).toHaveValue('1');
      });
    });
  });

  context('when user click selectBox after choose option', () => {
    it('should change option value', async () => {
      renderProductsDetail();

      await waitFor(async () => {
        const optionColor = screen.getByTestId('select-option-컬러');
        await userEvent.click(optionColor);

        const itemBlack = screen.getByTestId('item-black');

        expect(itemBlack).toBeInTheDocument();
        expect(screen.getByTestId('item-white')).toBeInTheDocument();
        expect(screen.getByTestId('item-beige')).toBeInTheDocument();

        await userEvent.click(itemBlack);

        expect(optionColor).toHaveTextContent('black');
        expect(itemBlack).not.toBeInTheDocument();
      });
    });
  });

  context('when add cart product', () => {
    it('should call cart event', async () => {
      renderProductsDetail();

      await waitFor(async () => {
        const cartButton = screen.getByAltText(/shopping-cart/);
        cartButton.onclick = handleAddCart;

        await userEvent.click(cartButton);
        expect(handleAddCart).toBeCalledTimes(1);
      });
    });
  });
});
