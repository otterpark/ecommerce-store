import { Cart } from '@/types/cart';

import { mockCart } from '@/fixtures/__mocks__/api';

import { cartReducer, clearCart, setCart } from './cart';

const context = describe;

describe('cartSlice ', () => {
  const cartInitialState: Cart = {
    lineItems: [],
    totalPrice: 0,
  };

  it('should return the initial state', () => {
    expect(cartReducer(undefined, { type: undefined })).toEqual(cartInitialState);
  });

  context('when set state by setAuth action', () => {
    it('update initialState to updateState auth data', () => {
      const updateState: Cart = { lineItems: mockCart.lineItems, totalPrice: mockCart.totalPrice };
      const action = setCart(updateState);

      expect(cartReducer(cartInitialState, action)).toEqual(mockCart);
    });
  });

  context('when clear state by action', () => {
    it('clear user state data', () => {
      const initState: Cart = { lineItems: mockCart.lineItems, totalPrice: mockCart.totalPrice };
      const action = clearCart();
      expect(cartReducer(initState, action)).toEqual(cartInitialState);
    });
  });
});
