/* eslint-disable no-unused-expressions */
import { api } from '@/api/call';
import {
  GetUserInfoResponse, LoginRequest, LoginResponse, SignupRequest, SignupResponse,
} from '@/api/types/user';
import {
  LOGIN, LOGOUT, SIGNUP, USER_INFO,
} from '@/api/url';

import { clearAuth, setAuth, setUserInfo } from '@/features';

import { useAppDispatch } from '@/hooks/useReduxWithType';

const useUserService = () => {
  const dispatch = useAppDispatch();

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
          dispatch(
            setAuth({
              isAuthenticated: true,
              accessToken: response.accessToken,
            }),
          );
          onSuccess && onSuccess();
        },
      )
      .catch(() => {
        dispatch(clearAuth());
        onError && onError();
      });
  };

  const logout = (
    onSuccess?: () => void,
    onError?: () => void,
  ) => {
    api.delete<any, any>(
      LOGOUT,
    )
      .then(
        () => {
          dispatch(clearAuth());
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
          dispatch(
            setAuth({
              isAuthenticated: true,
              accessToken: response.accessToken,
            }),
          );
          onSuccess && onSuccess();
        },
      )
      .catch(() => {
        dispatch(clearAuth());
        onError && onError();
      });
  };

  const getUser = (
    onSuccess?: () => void,
    onError?: () => void,
  ) => {
    api.get<any, GetUserInfoResponse>(
      USER_INFO,
    )
      .then(
        (response: GetUserInfoResponse) => {
          dispatch(
            setUserInfo({
              id: response.id,
              name: response.name,
            }),
          );
          onSuccess && onSuccess();
        },
      )
      .catch(() => {
        dispatch(clearAuth());
        onError && onError();
      });
  };

  return {
    login, logout, signup, getUser,
  };
};

export default useUserService;
