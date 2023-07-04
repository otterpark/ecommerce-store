import { Color } from '@/types/color';
import React from 'react';
import styled, { css } from 'styled-components';

type BackgroundWrapProps = {
  children: React.ReactNode;
  backgroundColor: Color;
  isPositionFixed: boolean;
}

type StyleBackgroundWrapProps = Pick<BackgroundWrapProps, 'backgroundColor' | 'isPositionFixed'>

const StyledBackgroundWrap = styled.div<StyleBackgroundWrapProps>`
  ${(props) => props.isPositionFixed && css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `}
  background-color: ${(props) => props.backgroundColor};
`;

export default function BackgroundWrap({
  children,
  backgroundColor,
  isPositionFixed = false,
  ...props
}: BackgroundWrapProps) {
  return (
    <StyledBackgroundWrap
      backgroundColor={backgroundColor}
      isPositionFixed={isPositionFixed}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </StyledBackgroundWrap>
  );
}
