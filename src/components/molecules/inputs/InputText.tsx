import { BaseBoxPadding } from '@/styles/commonStyle';
import { fontSize } from '@/styles/sizes';
import { InputHTMLAttributes, useRef } from 'react';
import styled from 'styled-components';

type InputTextProps = {
  type: 'text'| 'password' | 'email';
  label: string;
} & InputHTMLAttributes<HTMLInputElement>

// type InputProps = {}
const Label = styled.label`
  display: none;
`;

const Input = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  ${BaseBoxPadding};
  height: 54px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
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
  const id = useRef(`input-${Math.random().toString(36).substring(2, 11)}`);

  return (
    <>
      <Label htmlFor={id.current}>
        {label}
      </Label>
      <Input
        type={type}
        id={id.current}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </>
  );
}
