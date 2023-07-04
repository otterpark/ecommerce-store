import styled from 'styled-components';

import Button from '@/components/atoms/buttons/Button';
import ModalBox from '@/components/atoms/modal/ModalBox';
import ModalContent from '@/components/atoms/modal/ModalContent';
import BackgroundWrap from '@/components/atoms/wrap/BackgroundWrap';

import useAlert from '@/hooks/useAlert';
import { useAppSelector } from '@/hooks/useReduxWithType';

import { borderRadius } from '@/styles/sizes';

const StyledModalAlert = styled.div``;

export default function ModalAlert() {
  const { isActive, message } = useAppSelector((state) => state.modal);
  const { hideAlert } = useAlert();

  const handleClick = () => {
    hideAlert();
  };

  if (!isActive) {
    return null;
  }

  return (
    <BackgroundWrap
      backgroundColor="rgba(0, 0, 0, 0.7)"
      isPositionFixed
    >
      <ModalBox>
        <ModalContent message={message} />
        <Button
          borderRadius={`0 0 ${borderRadius.default} ${borderRadius.default}`}
          onClick={handleClick}
        >
          확인
        </Button>
      </ModalBox>
    </BackgroundWrap>
  );
}
