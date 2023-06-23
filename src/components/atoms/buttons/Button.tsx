import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Button({ ...props }: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <button
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </button>
  );
}
