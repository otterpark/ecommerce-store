import { InputHTMLAttributes, useId } from 'react';
import styled from 'styled-components';

import { borderRadius, fontSize, space } from '@/styles/sizes';

type InputTextProps = {
  type: 'text'| 'password' | 'email';
  label: string;
  padding?: '' | string,
} & InputHTMLAttributes<HTMLInputElement>

type InputProps = Pick<InputTextProps, 'padding'>;

const Label = styled.label`
  display: none;
`;

const Input = styled.input<InputProps>`
  width: 100%;
  height: 54px;
  padding: ${(props) => (props.padding ? props.padding : `${space.xs} ${space.s}`)};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${borderRadius.default};

  font-size: ${fontSize.s};
  ::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
`;

export default function InputText({
  type = 'text',
  padding = '',
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
        padding={padding}
        id={id}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </>
  );
}
