import { maxWidth } from '@/styles/sizes';
import { ReactNode } from 'react';
import styled from 'styled-components';

type PositionMiddleWrapProps = {
  children: ReactNode;
}

const PositionMiddleWrapContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: ${maxWidth.middle};
`;

export default function PositionMiddleWrap({
  children,
}: PositionMiddleWrapProps) {
  return (
    <PositionMiddleWrapContainer>
      {children}
    </PositionMiddleWrapContainer>
  );
}
