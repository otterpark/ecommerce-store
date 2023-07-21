import {
  clearCart, setCart,
} from '@/features';

import { Cart } from '@/types/cart';

import { useAppSelector, useAppDispatch } from './useReduxWithType';

export default function useCart() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const updateCart = (newCart: Cart) => {
    dispatch(setCart(newCart));
  };

  const resetCart = () => {
    dispatch(clearCart());
  };

  return {
    cart,
    updateCart,
    resetCart,
  };
}
