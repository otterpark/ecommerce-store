import { render, screen, waitFor } from '@/utils/tests/renderWithRedux';
import mockRouter from 'next-router-mock';
import { SWRConfig } from 'swr';
import userEvent from '@testing-library/user-event';

import { mockProductDetail } from '@/fixtures/__mocks__/api/product';
import { mockCart } from '@/fixtures/__mocks__/api';

import { Cart } from '@/types/cart';
import { Auth } from '@/features';

import ProductDetail from './ProductDetail';
import ModalAlert from '../modal/ModalAlert';

jest.unmock('react-redux');

const context = describe;

describe('ProductDetail', () => {
  const initialCartState: Cart = { lineItems: [], totalPrice: 0 };
  const initialAuthState: Auth = { isAuthenticated: false, accessToken: '', userInfo: { id: '', name: '' } };
  const hasAuthState: Auth = { isAuthenticated: true, accessToken: 'accessToken', userInfo: { id: 'userId', name: 'user' } };
  const mockProduct = mockProductDetail;

  const renderProductsDetail = (auth = initialAuthState, cart = mockCart) => {
    const store = render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <ProductDetail productId={mockProduct.id} />
        <ModalAlert />
      </SWRConfig>,
      {
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

  it('can see product detail', async () => {
    renderProductsDetail();

    await waitFor(() => {
      expect(screen.getByAltText(/CBCL 사틴셔츠/)).toBeInTheDocument();
      expect(screen.getByText(/CBCL 사틴셔츠/)).toBeInTheDocument();
      expect(screen.getByText(/화이트 실크 소재의 살랑거리는 블라우스/)).toBeInTheDocument();

      expect(screen.getByText(/컬러/)).toBeInTheDocument();
      expect(screen.getByText(/사이즈/)).toBeInTheDocument();
      expect(screen.getByText(/상품 수량/)).toBeInTheDocument();
      expect(screen.getByText(/총 상품금액/)).toBeInTheDocument();

      expect(screen.getByAltText(/shopping-cart/)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
    });
  });

  context('when user click increase quantity button', () => {
    it('should increase quauntity', async () => {
      renderProductsDetail();

      await waitFor(async () => {
        const plusIcon = screen.getByAltText('plus-icon');
        await userEvent.click(plusIcon);

        expect(screen.getByLabelText('quantity')).toHaveValue('2');
      });
    });
  });

  context('when user click decrease quantity button', () => {
    it('if quantity is "1", quantity should be "1"', async () => {
      renderProductsDetail();

      await waitFor(async () => {
        const minusIcon = screen.getByAltText('minus-icon');
        await userEvent.click(minusIcon);

        expect(screen.getByLabelText('quantity')).toHaveValue('1');
      });
    });

    it('should decrease quauntity', async () => {
      renderProductsDetail();

      await waitFor(async () => {
        const plusIcon = screen.getByAltText('plus-icon');
        await userEvent.click(plusIcon);

        expect(screen.getByLabelText('quantity')).toHaveValue('2');

        const minusIcon = screen.getByAltText('minus-icon');
        await userEvent.click(minusIcon);

        expect(screen.getByLabelText('quantity')).toHaveValue('1');
      });
    });
  });

  context('when user click selectBox after choose option', () => {
    it('should change option value', async () => {
      renderProductsDetail();

      await waitFor(async () => {
        const optionColor = screen.getByTestId('select-option-컬러');
        await userEvent.click(optionColor);

        const itemBlack = screen.getByTestId('item-black');

        expect(itemBlack).toBeInTheDocument();
        expect(screen.getByTestId('item-white')).toBeInTheDocument();
        expect(screen.getByTestId('item-beige')).toBeInTheDocument();

        await userEvent.click(itemBlack);

        expect(optionColor).toHaveTextContent('black');
        expect(itemBlack).not.toBeInTheDocument();
      });
    });
  });

  context('when add cart product without login', () => {
    it('should see alert "로그인이 필요한 기능입니다."', async () => {
      renderProductsDetail(initialAuthState, initialCartState);

      await waitFor(async () => {
        const cartButton = screen.getByAltText(/shopping-cart/);
        await userEvent.click(cartButton);

        expect(screen.getByText(/로그인이 필요한 기능입니다./));
      });
    });
  });

  context('when add cart product with login', () => {
    it('should add cart data', async () => {
      const { store } = renderProductsDetail(hasAuthState, initialCartState);

      await waitFor(async () => {
        const cartButton = screen.getByAltText(/shopping-cart/);
        await userEvent.click(cartButton);

        expect(screen.getByText(/해당 상품이 장바구니에 추가되었습니다./));
        expect(store.getState().cart.lineItems.length).toBe(2);
        expect(store.getState().cart.totalPrice).toBe(2178000);
      });
    });
  });

  context('when click order button without auth', () => {
    it('should see alert "로그인이 필요한 기능입니다" ', async () => {
      renderProductsDetail(initialAuthState, initialCartState);

      await waitFor(async () => {
        const button = screen.getByRole('button', { name: '주문하기' });
        await userEvent.click(button);

        expect(screen.getByText(/로그인이 필요한 기능입니다./));
      });
    });
  });

  context('when click order button without cart data', () => {
    it('should see alert "장바구니에 상품을 넣으라는 문구" ', async () => {
      renderProductsDetail(hasAuthState, initialCartState);

      await waitFor(async () => {
        const button = screen.getByRole('button', { name: '주문하기' });
        await userEvent.click(button);

        expect(screen.getByText(/장바구니에 담긴 상품이 없습니다./));
      });
    });
  });

  context('when click order button with cart, auth data', () => {
    it('should move order router" ', async () => {
      renderProductsDetail(hasAuthState, mockCart);

      await waitFor(async () => {
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
});
