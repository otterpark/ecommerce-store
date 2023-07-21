import { render, screen } from '@/utils/tests/renderWithTheme';

import { mockCart } from '@/fixtures/__mocks__/api';

import CartItemTitle from './CartItemTitle';

describe('CartItemTitle', () => {
  const lineItem = mockCart.lineItems[0];

  const renderCartItemTitle = () => render(
    <CartItemTitle
      lineItem={lineItem}
    />,
  );

  it('render CartItemTitle', () => {
    renderCartItemTitle();

    expect(screen.getByText(/CBCL 사틴셔츠/)).toBeInTheDocument();
    expect(screen.getByText('컬러: white, 사이즈: S')).toBeInTheDocument();
  });
});
