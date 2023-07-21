import styled from 'styled-components';

import useCart from '@/hooks/useCart';
import useAuth from '@/hooks/useAuth';

import PageTitle from '@/components/atoms/texts/PageTitle';
import CartItemList from '@/components/molecules/cart/item/CartItemList';
import CartSidebar from '@/components/molecules/cart/CartSidebar';

import { breakpoints } from '@/styles/medias';
import { space } from '@/styles/sizes';

import { ERROR_MESSAGE } from '@/constants';
import ErrorMessage from '@/components/molecules/Error/ErrorMessage';

const CartListWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${space.m};

  ${breakpoints.tablet} {
    flex-direction: column;
  }
`;

export default function CartList() {
  const { cart } = useCart();
  const { auth } = useAuth();

  if (!auth.isAuthenticated) {
    return (
      <ErrorMessage message={ERROR_MESSAGE.AUTH.LOGIN_ACCESS} />
    );
  }

  if (!cart.lineItems.length) {
    return (
      <ErrorMessage message={ERROR_MESSAGE.CART.NULL_CART_DATA} />
    );
  }

  return (
    <>
      <PageTitle title="장바구니" mb={space.m} />
      <CartListWrap>
        <CartItemList lineItems={cart.lineItems} />
        <CartSidebar totalPrice={cart.totalPrice} />
      </CartListWrap>
    </>
  );
}
