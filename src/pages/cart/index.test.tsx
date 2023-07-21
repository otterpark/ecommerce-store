import { render, screen, waitFor } from '@/utils/tests/renderWithRedux';

import { Cart } from '@/types/cart';

import { Auth } from '@/features';
import { mockCart } from '@/fixtures/__mocks__/api';

import CartPage from './index.page';

jest.unmock('react-redux');

const context = describe;

describe('cartPage', () => {
  const initialCartState: Cart = { lineItems: [], totalPrice: 0 };
  const initialAuthState: Auth = { isAuthenticated: false, accessToken: '', userInfo: { id: '', name: '' } };
  const hasAuthState: Auth = { isAuthenticated: true, accessToken: 'accessToken', userInfo: { id: 'userId', name: 'user' } };

  const renderCartPage = (cart: Cart, auth: Auth) => {
    const { store } = render(<CartPage />, {
      preloadedState: {
        cart: {
          ...cart,
        },
        auth: {
          ...auth,
        },
      },
    });

    return store;
  };

  context('when user is not login', () => {
    it('render cartPage without cart data', async () => {
      renderCartPage(initialCartState, initialAuthState);

      await waitFor(() => {
        expect(screen.getByText(/로그인이 필요한 기능입니다. 로그인 후 이용해 주세요/)).toBeInTheDocument();
      });
    });
  });

  context('when user login', () => {
    it('render cartPage with no cart data', async () => {
      renderCartPage(initialCartState, hasAuthState);

      await waitFor(() => {
        expect(screen.getByText(/장바구니에 담긴 상품이 없습니다/)).toBeInTheDocument();
      });
    });

    it('render cartPage with cart data', async () => {
      renderCartPage(mockCart, hasAuthState);

      await waitFor(() => {
        expect(screen.getByText(/CBCL 사틴셔츠/)).toBeInTheDocument();
        expect(screen.getByText(/CBCL 레귤러핏 야구점퍼/)).toBeInTheDocument();

        expect(screen.getByText(/컬러: white/)).toBeInTheDocument();
        expect(screen.getByText(/컬러: brown/)).toBeInTheDocument();
        expect(screen.getByText(/사이즈: S/)).toBeInTheDocument();
        expect(screen.getByText(/사이즈: M/)).toBeInTheDocument();

        expect(screen.getByText(/상품금액/)).toBeInTheDocument();
        expect(screen.getByText(/배송비/)).toBeInTheDocument();
        expect(screen.getByText(/결제예정금액/)).toBeInTheDocument();

        expect(screen.getAllByText(/2,178,000 원/)).toHaveLength(2);
      });
    });
  });
});
