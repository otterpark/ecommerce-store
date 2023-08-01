import {
  render, screen, waitFor,
} from '@/utils/tests/renderWithRedux';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';

import { Cart } from '@/types/cart';

import { Auth } from '@/features';

import { mockCart } from '@/fixtures/__mocks__/api';

import Modal from '@/components/organisms/modal/Modal';
import ModalAlert from '@/components/organisms/modal/ModalAlert';
import OrderPage from './index.page';

jest.unmock('react-redux');

const context = describe;

describe('orderPage ', () => {
  const initialAuthState: Auth = { isAuthenticated: false, accessToken: '', userInfo: { id: '', name: '' } };
  const hasAuthState: Auth = { isAuthenticated: true, accessToken: 'accessToken', userInfo: { id: 'userId', name: 'user' } };

  const renderOrderPage = (cart: Cart, auth: Auth) => {
    const { store } = render(
      <>
        <OrderPage />
        <ModalAlert />
        <Modal />
      </>
      , {
        preloadedState: {
          cart: {
            ...cart,
          },
          auth: {
            ...auth,
          },
        },
      },
    );
    return store;
  };
  it('render orderPage', async () => {
    renderOrderPage(mockCart, hasAuthState);

    await waitFor(() => {
      expect(screen.getByText(/주문 상품/)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /자세히보기/ })).toBeInTheDocument();

      expect(screen.getByText(/배송 정보/)).toBeInTheDocument();
      expect(screen.getByText('이름')).toBeInTheDocument();
      expect(screen.getByText('핸드폰 번호')).toBeInTheDocument();
      expect(screen.getByText('우편번호')).toBeInTheDocument();
      expect(screen.getByText('주소')).toBeInTheDocument();
      expect(screen.getByText('상세 주소')).toBeInTheDocument();
      expect(screen.getByLabelText('name')).toBeInTheDocument();
      expect(screen.getByLabelText('phonenumber')).toBeInTheDocument();
      expect(screen.getByLabelText('postal-code')).toBeInTheDocument();
      expect(screen.getByLabelText('address')).toBeInTheDocument();
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

  context('when user authenticated is false', () => {
    it('should call router to main', async () => {
      renderOrderPage(mockCart, initialAuthState);
      await waitFor(() => {
        expect(mockRouter).toMatchObject({
          asPath: '/',
          pathname: '/',
          query: {},
        });
      });
    });
  });

  context('when user authenticated is false', () => {
    it('should call router to main', async () => {
      const mockCartOne: Cart = {
        lineItems: [mockCart.lineItems[0]],
        totalPrice: mockCart.totalPrice,
      };

      renderOrderPage(mockCartOne, initialAuthState);
      await waitFor(() => {
        expect(screen.getByText(/접근 권한이 없거나 잘못된 접근입니다./));
        expect(mockRouter).toMatchObject({
          asPath: '/',
          pathname: '/',
          query: {},
        });
      });
    });
  });

  context('when click "자세히보기" button', () => {
    it('should see cart list', async () => {
      renderOrderPage(mockCart, hasAuthState);

      const button = screen.getByRole('button', { name: /자세히보기/ });

      await userEvent.click(button);

      expect(screen.getByText(/CBCL 사틴셔츠/)).toBeInTheDocument();
      expect(screen.getByText(/CBCL 레귤러핏 야구점퍼/)).toBeInTheDocument();
    });
  });

  context('when click toss payment method button', () => {
    it('should call handleChangePaymentMethod', async () => {
      renderOrderPage(mockCart, hasAuthState);

      const tossButton = screen.getByAltText('toss-pay-logo-black');

      await userEvent.click(tossButton);

      expect(screen.getByAltText('toss-pay-logo-white')).toBeInTheDocument();
    });
  });
});
