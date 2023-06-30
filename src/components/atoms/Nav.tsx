import { useEffect, useState } from 'react';
import styled from 'styled-components';

import useWindowSize from '@/hooks/useWindowResize';

import { breakpoints, size } from '@/styles/medias';
import { borderRadius } from '@/styles/sizes';
import Menu from './Menu';

type ToggleProps = {
  isToggled: boolean;
}

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

  useEffect(() => {
    if (windowSize.width > size.tablet) {
      setIsToggled(false);
    }
  }, [windowSize.width]);

  return (
    <>
      <Menu isToggled={isToggled} />
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
