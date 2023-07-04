/* eslint-disable no-unused-expressions */
import { api } from '@/api/call';
import {
  GetUserInfoResponse, LoginRequest, LoginResponse, SignupRequest, SignupResponse,
} from '@/api/types/user';
import { LOGIN, SIGNUP, USER_INFO } from '@/api/url';

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
      .catch((error) => {
        clearAuth();
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
      .catch((error) => {
        clearAuth();
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
      .catch((error) => {
        clearAuth();
        onError && onError();
      });
  };

  return { login, signup, getUser };
};

export default useUserService;
