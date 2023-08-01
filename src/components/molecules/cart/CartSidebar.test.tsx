import { render, screen } from '@/utils/tests/renderWithTheme';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';

import { mockCart } from '@/fixtures/__mocks__/api';

import CartSidebar from './CartSidebar';

const context = describe;

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

  context('when click order button', () => {
    it('should move order page', async () => {
      renderCartSidebar();

      const button = screen.getByRole('button', { name: '주문하기' });

      await userEvent.click(button);

      expect(mockRouter).toMatchObject({
        asPath: '/order',
        pathname: '/order',
        query: {},
      });
    });
  });
});
