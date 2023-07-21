/* eslint-disable no-underscore-dangle */
import { Cart } from '@/types/cart';
import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';

const cartInitialState: Cart = {
  lineItems: [],
  totalPrice: 0,
};

const _setCart: CaseReducer<Cart, PayloadAction<Cart>> = (state, action) => {
  const { lineItems, totalPrice } = action.payload;

  return {
    ...state,
    lineItems,
    totalPrice,
  };
};

const _clearCart: CaseReducer<Cart> = (state) => ({
  ...state,
  ...cartInitialState,
});

export const cart = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    setCart: _setCart,
    clearCart: _clearCart,
  },
});

export const { setCart, clearCart } = cart.actions;
export const cartReducer = cart.reducer;
