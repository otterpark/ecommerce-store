import { ReactNode } from 'react';
import styled from 'styled-components';

type SidebarProps = {
  children: ReactNode;
}

const StyledSidebar = styled.aside`
  flex: 1 1 auto;
`;

export default function Sidebar({ children }: SidebarProps) {
  return (
    <StyledSidebar>
      {children}
    </StyledSidebar>
  );
}
