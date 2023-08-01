import { render, screen } from '@/utils/tests/renderWithTheme';

import { mockCart } from '@/fixtures/__mocks__/api';

import CartItemQuantity from './CartItemQuantity';

describe('CartItemQuantity', () => {
  const { quantity } = mockCart.lineItems[0];

  const renderCartItemQuantity = () => render(
    <CartItemQuantity quantity={quantity} />,
  );

  it('render CartItemQuantity', () => {
    renderCartItemQuantity();

    expect(screen.getByText('5개')).toBeInTheDocument();
  });
});
