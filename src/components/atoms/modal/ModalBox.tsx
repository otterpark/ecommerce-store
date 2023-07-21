import { ReactNode } from 'react';
import styled from 'styled-components';

import { borderRadius, maxWidth, space } from '@/styles/sizes';
import { breakpoints } from '@/styles/medias';

const StyledModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${borderRadius.default};
  background-color: ${(props) => props.theme.colors.white};
  max-width: ${maxWidth.middle}px;

  ${breakpoints.tablet} {
    width: calc(100% - ${space.l});
    max-width: none;
  }
`;

type ModalBoxProps = {
  children: ReactNode
}
export default function ModalBox({ children }: ModalBoxProps) {
  return (
    <StyledModalBox>
      {children}
    </StyledModalBox>
  );
}
