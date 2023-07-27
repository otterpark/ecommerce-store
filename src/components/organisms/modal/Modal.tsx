import { ReactElement } from 'react';

import ModalBody from '@/components/atoms/modal/ModalBody';
import ModalBox from '@/components/atoms/modal/ModalBox';
import ModalFooter from '@/components/atoms/modal/ModalFooter';
import ModalHeader from '@/components/atoms/modal/ModalHeader';
import BackgroundWrap from '@/components/atoms/wrap/BackgroundWrap';

import useModal from '@/hooks/useModal';

export default function Modal() {
  const { modal, hideModal } = useModal();

  const { title, body, footer } = modal;

  if (!modal.isActive) {
    return null;
  }

  return (
    <BackgroundWrap
      backgroundColor="rgba(0, 0, 0, 0.7)"
      isPositionFixed
    >
      <ModalBox>
        <ModalHeader
          title={title}
          onClickClose={hideModal}
        />
        <ModalBody
          body={body as ReactElement}
        />
        { footer && (
          <ModalFooter
            footer={footer as ReactElement}
          />
        ) }
      </ModalBox>
    </BackgroundWrap>
  );
}
