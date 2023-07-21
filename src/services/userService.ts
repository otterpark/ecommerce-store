/* eslint-disable no-unused-expressions */
import { api } from '@/api/call';
import {
  GetUserInfoResponse, LoginRequest, LoginResponse, SignupRequest, SignupResponse,
} from '@/api/types/user';
import {
  GET_CART,
  LOGIN, LOGOUT, SIGNUP, USER_INFO,
} from '@/api/url';

import { GetCartResponse } from '@/api/types/cart';
import useAuth from '@/hooks/useAuth';
import useCart from '@/hooks/useCart';

const useUserService = () => {
  const { updateAuth, updateUserInfo, resetAuth } = useAuth();
  const { updateCart, resetCart } = useCart();

  const login = (
    body: Partial<LoginRequest>,
    onSuccess?: () => void,
    onError?: () => void,
  ) => {
    api.post<LoginRequest, LoginResponse>(
      LOGIN,
      body,
    )
      .then(
        (response: LoginResponse) => {
          updateAuth(response.accessToken);
          onSuccess && onSuccess();
        },
      )
      .catch(() => {
        resetAuth();
        resetCart();
        onError && onError();
      });
  };

  const logout = (
    onSuccess?: () => void,
    onError?: () => void,
  ) => {
    api.delete(
      LOGOUT,
    )
      .then(
        () => {
          resetAuth();
          resetCart();
          onSuccess && onSuccess();
        },
      )
      .catch(() => {
        onError && onError();
      });
  };

  const signup = (
    body: Partial<SignupRequest>,
    onSuccess?: () => void,
    onError?: () => void,
  ) => {
    api.post<SignupRequest, SignupResponse>(
      SIGNUP,
      body,
    )
      .then(
        (response: SignupResponse) => {
          updateAuth(response.accessToken);
          onSuccess && onSuccess();
        },
      )
      .catch(() => {
        resetAuth();
        resetCart();
        onError && onError();
      });
  };

  const getUser = (
    onSuccess?: () => void,
    onError?: () => void,
  ) => {
    Promise.all([
      api.get<any, GetUserInfoResponse>(USER_INFO),
      api.get<any, GetCartResponse>(GET_CART),
    ])
      .then(async (response: [GetUserInfoResponse, GetCartResponse]) => {
        const userInfo = response[0];
        const cart = response[1];

        await updateUserInfo({
          id: userInfo.id,
          name: userInfo.name,
        });

        await updateCart({
          lineItems: cart.lineItems,
          totalPrice: cart.totalPrice,
        });
        onSuccess && onSuccess();
      })
      .catch(() => {
        resetAuth();
        resetCart();
        onError && onError();
      });
  };

  return {
    login, logout, signup, getUser,
  };
};

export default useUserService;
