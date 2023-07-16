import Link from 'next/link';
import styled from 'styled-components';

import { breakpoints } from '@/styles/medias';
import { space } from '@/styles/sizes';

import useProduct from '@/hooks/useProduct';
import { useRouter } from 'next/router';

type MenuProps = {
  isToggled: boolean;
  setIsToggled: (isToggled: boolean) => void;
}

type StyledMenuProps = Pick<MenuProps, 'isToggled'>

const StyledMenu = styled.ul<StyledMenuProps>`
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
    flex-direction: column;
    padding: ${space.s};
    li {
      padding: 1.6rem 2.4rem;
    }
  }
`;

export default function Menu({
  isToggled, setIsToggled,
}: MenuProps) {
  const router = useRouter();
  const { categories } = useProduct();

  const handleClick = (url: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsToggled(!isToggled);
    router.push(url);
  };

  return (
    <StyledMenu
      isToggled={isToggled}
    >
      {categories.data?.map((category) => {
        const url = `/category/${category.id}`;
        return (
          <li key={category.id}>
            <Link href={url} onClick={(event) => handleClick(url, event)}>
              {category.name}
            </Link>
          </li>
        );
      })}
    </StyledMenu>
  );
}
