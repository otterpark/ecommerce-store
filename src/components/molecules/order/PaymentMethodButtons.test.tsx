import { render, screen } from '@/utils/tests/renderWithTheme';
import userEvent from '@testing-library/user-event';

import { PaymentMethod } from '@/components/organisms/order/OrderPayment';

import PaymentMethodButtons from './PaymentMethodButtons';

const context = describe;

describe('PaymentMethodButtons ', () => {
  const handleChangePaymentMethod = jest.fn();

  const renderPaymentMethodButtons = (paymentMethod: PaymentMethod = 'kakaopay') => render(
    <PaymentMethodButtons
      paymentMethod={paymentMethod}
      handleChangePaymentMethod={handleChangePaymentMethod}
    />,
  );

  it('render PaymentMethodButtons', () => {
    renderPaymentMethodButtons();

    expect(screen.getByAltText('kakao-pay-logo-black')).toBeInTheDocument();
    expect(screen.getByAltText('toss-pay-logo-black')).toBeInTheDocument();
  });

  context('when click toss payment method button', () => {
    it('should call handleChangePaymentMethod', async () => {
      renderPaymentMethodButtons();

      const tossButton = screen.getByAltText('toss-pay-logo-black');

      await userEvent.click(tossButton);

      expect(handleChangePaymentMethod).toBeCalledTimes(1);
    });
  });
});
