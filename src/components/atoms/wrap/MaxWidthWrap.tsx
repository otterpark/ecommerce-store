import React from 'react';
import styled from 'styled-components';

type MaxWidthWrapProps = {
  children: React.ReactNode;
}

const StyledMaxWidthWrap = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

export default function MaxWidthWrap({
  children,
  ...props
}: MaxWidthWrapProps) {
  return (
    <StyledMaxWidthWrap
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </StyledMaxWidthWrap>
  );
}
