import styled from 'styled-components';
import { ReactNode, ButtonHTMLAttributes } from 'react';

import { borderRadius, fontSize, space } from '@/styles/sizes';

import { Color, ColorTheme } from '@/types/color';
import defaultTheme from '@/styles/defaultTheme';

type BorderRadius = `${string | number} ${string | number} ${string | number} ${string | number}` | `${number}`;

type ButtonProps = {
  type?: 'button' | 'submit',
  children: ReactNode,
  width?: string | 'auto';
  height?: string | 'auto';
  padding?: string;
  backgroundColor?: Color | ColorTheme;
  borderColor?: Color | ColorTheme;
  isPrimary?: boolean,
  isDisabled?: boolean,
  isBorder?: boolean,
  borderRadius?: BorderRadius;
} & ButtonHTMLAttributes<HTMLButtonElement>

const DefaultButton = styled.button<ButtonProps>`
  background: ${(props) => (props.isPrimary ? props.theme.colors.primary : props.backgroundColor)};
  color: ${(props) => (props.isPrimary ? 'white' : props.theme.colors.text)};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-width: ${(props) => (props.isBorder ? '1px' : '0px')};
  border-style: solid;
  border-color: ${(props) => (props.isPrimary ? props.theme.colors.primary : props.borderColor)};
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
  isBorder = true,
  width = '100%',
  height = '54px',
  padding = `${space.xs} ${space.xs}`,
  backgroundColor = '#fff',
  borderColor = `${defaultTheme.colors.border as Color}`,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <DefaultButton
      type={type}
      width={width}
      height={height}
      padding={padding}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      disabled={isDisabled}
      isPrimary={isPrimary}
      isBorder={isBorder}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </DefaultButton>
  );
}
