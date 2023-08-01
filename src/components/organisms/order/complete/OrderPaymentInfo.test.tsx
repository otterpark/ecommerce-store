import {
  render, screen, waitFor,
} from '@/utils/tests/renderWithSWR';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';

import server from '@/mocks/server';
import { getOrder } from '@/mocks/handlers/order';
import OrderPaymentInfo from './OrderPaymentInfo';

const context = describe;

describe('OrderPaymentInfo', () => {
  const orderId = 'orderTestId';
  const renderOrderPaymentInfo = () => render(
    <OrderPaymentInfo orderId={orderId} />,
  );

  it('render OrderPaymentInfo', async () => {
    renderOrderPaymentInfo();

    await waitFor(() => {
      expect(screen.getByText(/결제가 완료되었습니다/)).toBeInTheDocument();

      expect(screen.getByText(/맨투맨/)).toBeInTheDocument();
      expect(screen.getByText('컬러: black, 사이즈: M')).toBeInTheDocument();
      expect(screen.getByText(/2개/)).toBeInTheDocument();

      expect(screen.getByText(/결제 날짜/)).toBeInTheDocument();
      expect(screen.getByText(/2023-01-01 00:00/)).toBeInTheDocument();

      expect(screen.getByText(/결제 상태/)).toBeInTheDocument();
      expect(screen.getByText(/결제 완료/)).toBeInTheDocument();

      expect(screen.getByText(/총 결제 금액/)).toBeInTheDocument();
      expect(screen.getAllByText(/256,000 원/)).toHaveLength(2);

      expect(screen.getByRole('button', { name: /메인으로 이동하기/ })).toBeInTheDocument();
    });
  });

  context('when render with error', () => {
    it('can see error message', async () => {
      server.use(getOrder('Error'));
      renderOrderPaymentInfo();

      await waitFor(() => {
        expect(screen.getByText('페이지에 예상치 못한 오류가 발생하였습니다. 잠시 후 다시 시도해 주세요.')).toBeInTheDocument();
      });
    });
  });

  context('when button click', () => {
    it('should call "handleClickMoveHome"', async () => {
      renderOrderPaymentInfo();

      await waitFor(async () => {
        const button = screen.getByRole('button', { name: /메인으로 이동하기/ });

        await userEvent.click(button);

        expect(mockRouter).toMatchObject({
          asPath: '/',
          pathname: '/',
          query: {},
        });
      });
    });
  });
});
