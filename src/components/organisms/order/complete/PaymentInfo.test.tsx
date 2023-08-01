import {
  render, screen, waitForElementToBeRemoved,
} from '@/utils/tests/renderWithSWR';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';

import { mockOrder } from '@/fixtures/__mocks__/api/order';

import PaymentInfo from './PaymentInfo';

const context = describe;

describe('PaymentInfo', () => {
  const orderPaymentInfo = mockOrder;
  const handleClickMoveHome = jest.fn();
  const renderPaymentInfo = () => render(
    <PaymentInfo
      orderPaymentInfo={orderPaymentInfo}
      handleClickMoveHome={handleClickMoveHome}
    />,
  );

  it('render PaymentInfo', async () => {
    renderPaymentInfo();

    expect(screen.getByText(/결제 날짜/)).toBeInTheDocument();
    expect(screen.getByText(/2023-01-01 00:00/)).toBeInTheDocument();

    expect(screen.getByText(/결제 상태/)).toBeInTheDocument();
    expect(screen.getByText(/결제 완료/)).toBeInTheDocument();

    expect(screen.getByText(/총 결제 금액/)).toBeInTheDocument();
    expect(screen.getByText(/256,000 원/)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /메인으로 이동하기/ })).toBeInTheDocument();
  });

  context('when button click', () => {
    it('should call "handleClickMoveHome"', async () => {
      renderPaymentInfo();

      const button = screen.getByRole('button', { name: /메인으로 이동하기/ });

      await userEvent.click(button);

      expect(handleClickMoveHome).toBeCalled();
    });
  });
});
