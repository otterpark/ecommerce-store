import { InputHTMLAttributes, useId } from 'react';
import styled, { css } from 'styled-components';

import { borderRadius, fontSize, space } from '@/styles/sizes';

type InputTextProps = {
  type: 'text'| 'password' | 'email';
  width?: string;
  height?: string;
  label: string;
  isBorderNone?: boolean;
  padding?: '' | string;
} & InputHTMLAttributes<HTMLInputElement>

type InputProps = Pick<InputTextProps, 'padding' | 'isBorderNone' | 'width' | 'height'>;

const Label = styled.label`
  display: none;
`;

const Input = styled.input<InputProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => (props.padding ? props.padding : `${space.xs} ${space.s}`)};
  border: ${(props) => (props.isBorderNone ? 'none' : `1px solid ${props.theme.colors.border};`)};
  border-radius: ${borderRadius.default};

  font-size: ${fontSize.s};
  ::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
`;

export default function InputText({
  width = '100%',
  height = '54px',
  type = 'text',
  padding = '',
  isBorderNone = false,
  label,
  ...props
}: InputTextProps) {
  const id = useId();

  return (
    <>
      <Label htmlFor={id}>
        {label}
      </Label>
      <Input
        type={type}
        width={width}
        height={height}
        padding={padding}
        id={id}
        isBorderNone={isBorderNone}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </>
  );
}
