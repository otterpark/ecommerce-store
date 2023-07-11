import Link from 'next/link';
import styled from 'styled-components';

import { breakpoints } from '@/styles/medias';
import { space } from '@/styles/sizes';

import useProduct from '@/hooks/useProduct';

type MenuProps = {
  isToggled: boolean;
}

const StyledMenu = styled.ul<MenuProps>`
  display: flex;
  flex-direction: columns;
  align-items: center;
  margin-left: 3.2rem;
  gap: ${space.m};
  li {
    a {
      display: inline-block;
      height: 100%;
      text-decoration: none;
      text-transform: uppercase;
    }
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
  const { categories } = useProduct();

  return (
    <StyledMenu
      isToggled={isToggled}
    >
      {categories.data?.map((category) => (
        <li key={category.id}>
          <Link href={`/${category.id}`}>
            {category.name}
          </Link>
        </li>
      ))}
    </StyledMenu>
  );
}
