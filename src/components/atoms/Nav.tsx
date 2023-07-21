import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import useWindowSize from '@/hooks/useWindowResize';
import useCart from '@/hooks/useCart';

import { breakpoints, size } from '@/styles/medias';
import { borderRadius, fontSize, space } from '@/styles/sizes';

import Menu from './Menu';
import Image from './images/Image';

type ToggleProps = {
  isToggled: boolean;
}

const Icon = styled.div`
  display: flex;
  margin-left: auto;
  position: relative;
  margin-right: ${space.xs};
  a {
    display: flex;
  }
  ${breakpoints.tablet} {
    margin-right: ${space.s};
  }
`;

const CartCount = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -5px;
  right: -10px;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: ${borderRadius.full};
  font-size: ${fontSize.xxs};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`;

const StyledBurger = styled.button<ToggleProps>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #0D0C1D;
    border-radius: ${borderRadius.default};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${(props) => (props.isToggled ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${(props) => (props.isToggled ? '0' : '1')};
      transform: ${(props) => (props.isToggled ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${(props) => (props.isToggled ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  ${breakpoints.tablet} {
    display: flex;
  }
`;

export default function Nav() {
  const windowSize = useWindowSize();
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const { cart } = useCart();

  useEffect(() => {
    if (windowSize.width > size.tablet) {
      setIsToggled(false);
    }
  }, [windowSize.width]);

  return (
    <>
      <Menu
        windowWidth={windowSize.width}
        isToggled={isToggled}
        setIsToggled={setIsToggled}
      />
      <Icon onClick={() => setIsToggled(false)}>
        <Link href="/cart">
          <Image src="/assets/icons/shopping-cart.png" width={25} />
          {cart.lineItems && <CartCount>{cart.lineItems.length}</CartCount>}
        </Link>
      </Icon>
      <StyledBurger
        isToggled={isToggled}
        onClick={() => setIsToggled(!isToggled)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
}
