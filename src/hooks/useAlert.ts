import {
  Modal, closeModal, openModal,
} from '@/features';
import { useAppSelector, useAppDispatch } from './useReduxWithType';

export default function useAlert() {
  const dispatch = useAppDispatch();
  const alert = useAppSelector((state) => state.modal);

  type showAlertProps = Pick<Modal, 'message'>
  const showAlert = ({ message }: showAlertProps) => {
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
