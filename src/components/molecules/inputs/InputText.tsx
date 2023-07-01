import { InputHTMLAttributes, useId } from 'react';
import styled from 'styled-components';

import { BaseBoxPadding } from '@/styles/commonStyle';
import { borderRadius, fontSize } from '@/styles/sizes';

type InputTextProps = {
  type: 'text'| 'password' | 'email';
  label: string;
} & InputHTMLAttributes<HTMLInputElement>

const Label = styled.label`
  display: none;
`;

const Input = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  ${BaseBoxPadding};
  height: 54px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${borderRadius.default};

  font-size: ${fontSize.s};
  ::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
`;

export default function InputText({
  type = 'text',
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
        id={id}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </>
  );
}
