import {
  fireEvent, render, screen, waitFor,
} from '@/utils/tests/renderWithRedux';
import userEvent from '@testing-library/user-event';

import { mockCart } from '@/fixtures/__mocks__/api';

import OrderPayment from './OrderPayment';
import Modal from '../modal/Modal';

jest.unmock('react-redux');

describe('OrderPayment', () => {
  const renderOrderPayment = () => render(
    <>
      <OrderPayment />
      <Modal />
    </>
    , {
      preloadedState: {
        cart: mockCart,
      },
    },
  );

  it('render OrderPayment', async () => {
    renderOrderPayment();

    await waitFor(() => {
      expect(screen.getByText(/주문 상품/)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /자세히보기/ })).toBeInTheDocument();

      expect(screen.getByText(/배송 정보/)).toBeInTheDocument();
      expect(screen.getByText('이름')).toBeInTheDocument();
      expect(screen.getByLabelText('name')).toBeInTheDocument();
      expect(screen.getByText('핸드폰 번호')).toBeInTheDocument();
      expect(screen.getByLabelText('phonenumber')).toBeInTheDocument();
      expect(screen.getByText('우편번호')).toBeInTheDocument();
      expect(screen.getByLabelText('postal-code')).toBeInTheDocument();
      expect(screen.getByText('주소')).toBeInTheDocument();
      expect(screen.getByLabelText('address')).toBeInTheDocument();
      expect(screen.getByText('상세 주소')).toBeInTheDocument();
      expect(screen.getByLabelText('address-detail')).toBeInTheDocument();

      expect(screen.getByText(/결제 수단/)).toBeInTheDocument();
      expect(screen.getByAltText('kakao-pay-logo-black')).toBeInTheDocument();
      expect(screen.getByAltText('toss-pay-logo-black')).toBeInTheDocument();

      expect(screen.getByText(/상품금액/)).toBeInTheDocument();
      expect(screen.getByText(/배송비/)).toBeInTheDocument();
      expect(screen.getByText(/할인금액/)).toBeInTheDocument();
      expect(screen.getByText(/결제예정금액/)).toBeInTheDocument();
      expect(screen.getAllByText(/2,178,000 원/)).toHaveLength(2);
    });
  });
});
