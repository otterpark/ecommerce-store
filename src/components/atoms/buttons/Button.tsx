import styled from 'styled-components';
import { ReactNode, ButtonHTMLAttributes } from 'react';

import { BaseBoxPadding } from '@/styles/commonStyle';
import { fontSize } from '@/styles/sizes';

type ButtonProps = {
  children: ReactNode,
  isPrimary?: boolean,
} & ButtonHTMLAttributes<HTMLButtonElement>

const DefaultButton = styled.button<ButtonProps>`
  background: ${(props) => (props.isPrimary ? props.theme.colors.primary : 'white')};
  color: ${(props) => (props.isPrimary ? 'white' : props.theme.colors.text)};
  ${BaseBoxPadding};
  height: 54px;
  width: 100%;
  border: 1px solid ${(props) => (props.isPrimary ? props.theme.colors.primary : props.theme.colors.border)};
  border-radius: 8px;
  font-size: ${fontSize.s};
  font-weight: bold;
  cursor: pointer;
`;

export default function Button({
  children,
  isPrimary = false,
  ...props
}: ButtonProps) {
  return (
    <DefaultButton
      type="button"
      isPrimary={isPrimary}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </DefaultButton>
  );
}
