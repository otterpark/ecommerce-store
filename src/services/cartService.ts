/* eslint-disable no-unused-expressions */
import useCart from '@/hooks/useCart';

import { api } from '@/api/call';
import { AddCartRequest, GetCartResponse } from '@/api/types/cart';
import { ADD_CART, GET_CART } from '@/api/url';

const useCartService = () => {
  const { updateCart } = useCart();

  const addCart = (
    body: Partial<AddCartRequest>,
    onSuccess?: () => void,
    onError?: () => void,
  ) => {
    api.post<AddCartRequest, any>(
      ADD_CART,
      body,
    )
      .then(
        (response: any) => {
          onSuccess && onSuccess();
        },
      )
      .catch(() => {
        onError && onError();
      });
  };

  const getCart = (
    onSuccess?: () => void,
    onError?: () => void,
  ) => {
    api.get<any, GetCartResponse>(
      GET_CART,
    )
      .then(
        (response: GetCartResponse) => {
          updateCart({
            lineItems: response.lineItems,
            totalPrice: response.totalPrice,
          });
          onSuccess && onSuccess();
        },
      )
      .catch(() => {
        onError && onError();
      });
  };

  return {
    addCart, getCart,
  };
};

export default useCartService;
