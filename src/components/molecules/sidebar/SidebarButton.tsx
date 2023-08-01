import { ReactNode } from 'react';

import styled from 'styled-components';

import { breakpoints } from '@/styles/medias';
import { space } from '@/styles/sizes';

const StyledSidebarButton = styled.div`
  ${breakpoints.tablet} {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.white};
    border-top: 1px solid ${(props) => props.theme.colors.border};
    padding: ${space.m} ${space.s} ${space.s};
  }
`;

type SidebarButtonProps = {
  children: ReactNode;
}
export default function SidebarButton({ children }: SidebarButtonProps) {
  return (
    <StyledSidebarButton>
      {children}
    </StyledSidebarButton>
  );
}
