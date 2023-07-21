import styled from 'styled-components';
import { ReactNode, ButtonHTMLAttributes } from 'react';

import { borderRadius, fontSize, space } from '@/styles/sizes';

type BorderRadius = `${string | number} ${string | number} ${string | number} ${string | number}` | `${number}`;

type ButtonProps = {
  type?: 'button' | 'submit',
  children: ReactNode,
  width?: string | 'auto';
  height?: string | 'auto';
  padding?: string;
  isPrimary?: boolean,
  isDisabled?: boolean,
  borderRadius?: BorderRadius;
} & ButtonHTMLAttributes<HTMLButtonElement>

const DefaultButton = styled.button<ButtonProps>`
  background: ${(props) => (props.isPrimary ? props.theme.colors.primary : 'white')};
  color: ${(props) => (props.isPrimary ? 'white' : props.theme.colors.text)};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: 1px solid ${(props) => (props.isPrimary ? props.theme.colors.primary : props.theme.colors.border)};
  border-radius: ${(props) => ((props.borderRadius) ? props.borderRadius : borderRadius.default)};
  font-size: ${fontSize.s};
  font-weight: bold;
  cursor: pointer;
  transition: opacity .3s linear;
  :disabled {
    opacity: .6;
    cursor: auto;
  }
`;

export default function Button({
  children,
  isDisabled = false,
  isPrimary = false,
  width = '100%',
  height = '54px',
  padding = `${space.xs} ${space.xs}`,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <DefaultButton
      type={type}
      isPrimary={isPrimary}
      width={width}
      height={height}
      padding={padding}
      disabled={isDisabled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </DefaultButton>
  );
}
