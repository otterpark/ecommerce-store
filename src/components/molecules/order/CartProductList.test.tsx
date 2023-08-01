import { render, screen } from '@/utils/tests/renderWithTheme';

import { mockCart } from '@/fixtures/__mocks__/api';

import userEvent from '@testing-library/user-event';

import CartProductList from './CartProductList';

const context = describe;

describe('CartProductList', () => {
  const renderCartProductList = () => render(
    <CartProductList
      cartItems={mockCart.lineItems}
    />,
  );

  it('render CartItemQuantity', () => {
    renderCartProductList();

    expect(screen.getByText(/주문 상품/)).toBeInTheDocument();
    expect(screen.getByText('[CBCL 사틴셔츠] 포함 2개의 상품을 주문합니다.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /자세히보기/ })).toBeInTheDocument();
  });

  context('when click "자세히보기" button', () => {
    it('should see cart list', async () => {
      renderCartProductList();

      const button = screen.getByRole('button', { name: /자세히보기/ });

      await userEvent.click(button);

      expect(screen.getByText(/CBCL 사틴셔츠/)).toBeInTheDocument();
      expect(screen.getByText(/CBCL 레귤러핏 야구점퍼/)).toBeInTheDocument();
    });
  });
});
