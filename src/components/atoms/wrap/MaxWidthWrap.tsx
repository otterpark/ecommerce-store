import React from 'react';
import styled from 'styled-components';

type MaxWidthWrapProps = {
  children: React.ReactNode;
  maxWidth: number | 'none';
}

type StyleMaxWidthProps = Pick<MaxWidthWrapProps, 'maxWidth'>

const StyledMaxWidthWrap = styled.div<StyleMaxWidthProps>`
  max-width: ${(props) => (props.maxWidth !== 'none' ? `${props.maxWidth}px` : 'none')};
  margin: 0 auto;
`;

export default function MaxWidthWrap({
  children,
  maxWidth = 'none',
  ...props
}: MaxWidthWrapProps) {
  return (
    <StyledMaxWidthWrap
      maxWidth={maxWidth}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </StyledMaxWidthWrap>
  );
}
