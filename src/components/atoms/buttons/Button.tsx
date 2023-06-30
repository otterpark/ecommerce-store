import styled from 'styled-components';
import { ReactNode, ButtonHTMLAttributes } from 'react';

import { BaseBoxPadding } from '@/styles/commonStyle';
import { borderRadius, fontSize } from '@/styles/sizes';

type BorderRadius = `${number} ${number} ${number} ${number}` | `${number}`;

type ButtonProps = {
  type?: 'button' | 'submit',
  children: ReactNode,
  isPrimary?: boolean,
  isDisabled?: boolean,
  borderRadius?: BorderRadius;
} & ButtonHTMLAttributes<HTMLButtonElement>

const DefaultButton = styled.button<ButtonProps>`
  background: ${(props) => (props.isPrimary ? props.theme.colors.primary : 'white')};
  color: ${(props) => (props.isPrimary ? 'white' : props.theme.colors.text)};
  ${BaseBoxPadding};
  height: 54px;
  width: 100%;
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
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <DefaultButton
      type={type}
      isPrimary={isPrimary}
      disabled={isDisabled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </DefaultButton>
  );
}
