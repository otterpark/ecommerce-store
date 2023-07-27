import styled from 'styled-components';

import Text from '@/components/atoms/texts/Text';
import { space } from '@/styles/sizes';
import Button from '../buttons/Button';
import Image from '../images/Image';

type ModalHeaderProps = {
  title?: string;
  onClickClose: () => void;
}

type StyledModalHeaderProps = Pick<ModalHeaderProps, 'title'>

const StyledModalHeader = styled.div<StyledModalHeaderProps>`
  display: flex;
  justify-content: ${(props) => (props.title ? 'end' : 'space-between')};
  flex-direction: row;
  align-items: center;
  padding: ${space.xs} 0 ${space.xs} ${space.s};
`;

export default function ModalHeader({
  // eslint-disable-next-line react/require-default-props
  title,
  onClickClose,
}: ModalHeaderProps) {
  return (
    <StyledModalHeader>
      {title && (
        <Text textSize="default" textWeight="normal" textAlign="left" text={title} color="text" />
      )}
      <Button
        width="auto"
        height="auto"
        isBorder={false}
        padding={`${space.xxs} ${space.s}`}
        onClick={onClickClose}
      >
        <Image
          width={12}
          height={12}
          alt="close-icon"
          src="/assets/icons/close.png"
        />
      </Button>
    </StyledModalHeader>
  );
}
