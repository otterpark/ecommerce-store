import styled from 'styled-components';

import { breakpoints } from '@/styles/medias';

type MenuProps = {
  isToggled: boolean;
}

const StyledMenu = styled.ul<MenuProps>`
  margin-left: 3.2rem;
  li {
    padding: 1.6rem 0;
  }
  ${breakpoints.tablet} {
    position: absolute;
    top: 111.5px;
    left: 0;
    width: 100%;
    margin-left: 0;
    border-bottom: 1px solid #e0e0e0;
    background: white;
    z-index: ${(props) => (props.isToggled ? '1' : '-1')};
    opacity: ${(props) => (props.isToggled ? '1' : '0')};
    li {
      padding: 1.6rem 2.4rem;
    }
  }
`;

export default function Menu({
  isToggled,
}: MenuProps) {
  return (
    <StyledMenu
      isToggled={isToggled}
    >
      <li>Products</li>
    </StyledMenu>
  );
}
