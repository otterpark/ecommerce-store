import { render, screen } from '@/utils/tests/renderWithTheme';

import { mockCart } from '@/fixtures/__mocks__/api';

import CartItemTotalPrice from './CartItemTotalPrice';

describe('CartItemTotalPrice', () => {
  const { totalPrice } = mockCart.lineItems[0];

  const renderCartItemTotalPrice = () => render(
    <CartItemTotalPrice
      totalPrice={totalPrice}
    />,
  );

  it('render CartItemTotalPrice', () => {
    renderCartItemTotalPrice();

    expect(screen.getByText(/590,000 원/)).toBeInTheDocument();
  });
});
