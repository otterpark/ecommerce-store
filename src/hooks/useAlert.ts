import { closeAlert, openAlert } from '@/features';
import { useAppSelector, useAppDispatch } from './useReduxWithType';

export default function useAlert() {
  const dispatch = useAppDispatch();
  const alert = useAppSelector((state) => state.alert);

  const showAlert = (message: string) => {
    dispatch(openAlert({
      message,
    }));
  };

  const hideAlert = () => {
    dispatch(closeAlert());
  };

  return {
    alert,
    showAlert,
    hideAlert,
  };
}
