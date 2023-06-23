import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useWindowSize from '@/hooks/useWindowResize';
import { breakpoints, size } from '@/styles/medias';

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
    border-radius: 10px;
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

const Navigation = styled.ul<ToggleProps>`
  margin-left: 3.2rem;
  li {
    font-size: 1.6rem;
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
      <Navigation
        isToggled={isToggled}
      >
        <li>Products</li>
      </Navigation>
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
