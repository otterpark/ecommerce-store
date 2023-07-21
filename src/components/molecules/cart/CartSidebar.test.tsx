import { render, screen } from '@/utils/tests/renderWithTheme';

import { mockCart } from '@/fixtures/__mocks__/api';

import CartSidebar from './CartSidebar';

describe('CartSidebar', () => {
  const { totalPrice } = mockCart;

  const renderCartSidebar = () => render(
    <CartSidebar totalPrice={totalPrice} />,
  );

  it('render CartSidebar', () => {
    renderCartSidebar();

    expect(screen.getByText(/상품금액/)).toBeInTheDocument();
    expect(screen.getAllByText(/2,178,000 원/)).toHaveLength(2);
    expect(screen.getByText(/배송비/)).toBeInTheDocument();
    expect(screen.getByText(/할인금액/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '주문하기' }));
  });
});
