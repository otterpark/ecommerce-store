import {
  closeModal, openModal,
} from '@/features';
import { useAppSelector, useAppDispatch } from './useReduxWithType';

export default function useAlert() {
  const dispatch = useAppDispatch();
  const alert = useAppSelector((state) => state.modal);

  const showAlert = (message: string) => {
    dispatch(openModal({
      message,
    }));
  };

  const hideAlert = () => {
    dispatch(closeModal());
  };

  return {
    alert,
    showAlert,
    hideAlert,
  };
}
