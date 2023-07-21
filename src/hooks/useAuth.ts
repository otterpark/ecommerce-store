import {
  User, clearAuth, setAuth, setUserInfo,
} from '@/features';
import { useAppDispatch, useAppSelector } from './useReduxWithType';

export default function useAuth() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const updateAuth = (accessToken: string) => {
    dispatch(setAuth({
      isAuthenticated: true,
      accessToken,
    }));
  };

  const updateUserInfo = (userInfo: User) => {
    dispatch(setUserInfo({
      id: userInfo.id,
      name: userInfo.name,
    }));
  };

  const resetAuth = () => {
    dispatch(clearAuth());
  };

  return {
    auth,
    updateAuth,
    updateUserInfo,
    resetAuth,
  };
}
