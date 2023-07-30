/* eslint-disable import/no-extraneous-dependencies */
import { render, screen, waitFor } from '@/utils/tests/renderWithRedux';

import mockRouter from 'next-router-mock';

import userEvent from '@testing-library/user-event';

import { Auth } from '@/features';

import ModalAlert from '@/components/organisms/modal/ModalAlert';
import { mockUserAccessToken, mockUserInfo } from '@/fixtures/__mocks__/api';
import ProductsDetailPage from './[id].page';

jest.unmock('react-redux');

const context = describe;

describe('ProductPage ', () => {
  mockRouter.push('/products/0BV000PRO0002');
  const productId = '0BV000PRO0002';

  const renderProductsDetailpage = (auth?: Auth) => {
    // eslint-disable-next-line no-unused-expressions
    const { store } = (!auth) ? render(
      <>
        <ProductsDetailPage id={productId} />
        <ModalAlert />
      </>,
    ) : render(
      <>
        <ProductsDetailPage id={productId} />
        <ModalAlert />
      </>,
      {
        preloadedState: {
          auth: {
            ...auth,
          },
        },
      },
    );

    return store;
  };

  context('when render ProductPage', () => {
    it('can see product detail', async () => {
      renderProductsDetailpage();

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
  });

  context('when click cart button without login', () => {
    it('should open alert message "you should login message"', async () => {
      renderProductsDetailpage();

      await waitFor(async () => {
        const cartButton = screen.getByAltText(/shopping-cart/);
        await userEvent.click(cartButton);

        expect(screen.getByText(/로그인이 필요한 기능입니다. 로그인 후 이용해 주세요./)).toBeInTheDocument();
      });
    });
  });

  context('when click cart button with login', () => {
    it('should add product by set options, quantity in cart store ', async () => {
      const preloadAuthState: Auth = {
        isAuthenticated: true,
        accessToken: mockUserAccessToken.accessToken,
        userInfo: mockUserInfo,
      };

      const store = renderProductsDetailpage(preloadAuthState);

      await waitFor(async () => {
        const cartButton = screen.getByAltText(/shopping-cart/);

        await userEvent.click(cartButton);

        expect(store.getState().cart.lineItems.length).toBe(2);
        expect(store.getState().cart.totalPrice).toBe(2178000);

        expect(screen.getByText(/해당 상품이 장바구니에 추가되었습니다/)).toBeInTheDocument();
      });
    });
  });
});
