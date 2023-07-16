import { useAppDispatch, useAppSelector } from './useReduxWithType';

export default function useAuth() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  return {
    auth,
  };
}
