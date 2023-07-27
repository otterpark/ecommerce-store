import { ModalContent, closeModal, openModal } from '@/features';
import { useAppSelector, useAppDispatch } from './useReduxWithType';

export default function useAlert() {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal);

  const showModal = (modalContent: ModalContent) => {
    dispatch(openModal({
      ...modalContent,
    }));
  };

  const hideModal = () => {
    dispatch(closeModal());
  };

  return {
    modal,
    showModal,
    hideModal,
  };
}
