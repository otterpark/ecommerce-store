import { render, screen } from '@/utils/tests/renderWithTheme';
import userEvent from '@testing-library/user-event';

import { mockCart } from '@/fixtures/__mocks__/api';

import OrderSidebar from './OrderSidebar';

const context = describe;

describe('OrderSidebar', () => {
  const { totalPrice } = mockCart;
  const handleClickPayment = jest.fn();

  const renderOrderSidebar = (isValidCheck = false) => render(
    <OrderSidebar
      totalPrice={totalPrice}
      isValidCheck={isValidCheck}
      handleClickPayment={handleClickPayment}
    />,
  );

  it('render OrderSidebar', () => {
    renderOrderSidebar();

    expect(screen.getByText(/상품금액/)).toBeInTheDocument();
    expect(screen.getByText(/배송비/)).toBeInTheDocument();
    expect(screen.getByText(/할인금액/)).toBeInTheDocument();
    expect(screen.getByText(/결제예정금액/)).toBeInTheDocument();
    expect(screen.getAllByText(/2,178,000 원/)).toHaveLength(2);

    expect(screen.getByRole('button', { name: '결제하기' })).toBeInTheDocument();
  });

  context('when isValidCheck is not valid', () => {
    it('should not call handleClickPayment', async () => {
      renderOrderSidebar();

      const button = screen.getByRole('button', { name: '결제하기' });

      await userEvent.click(button);

      expect(handleClickPayment).toBeCalledTimes(0);
    });
  });

  context('when isValidCheck is valid', () => {
    it('should call handleClickPayment', async () => {
      renderOrderSidebar(true);

      const button = screen.getByRole('button', { name: '결제하기' });

      await userEvent.click(button);

      expect(handleClickPayment).toBeCalledTimes(1);
    });
  });
});
