import defaultTheme from '@/styles/defaultTheme';
import { borderRadius } from '@/styles/sizes';
import styled from 'styled-components';

type LoadingSpinnerProps = {
  color?: string;
}

const LoadingSpinnerBox = styled.div`
`;

const Spinner = styled.div<LoadingSpinnerProps>`
  width: 3rem;
  height: 3rem;
  border: .3rem solid ${(props) => props.color};
  border-top: .3rem solid transparent;
  border-radius: ${borderRadius.full};
  margin: 0 auto;

  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function LoadingSpinner({
  color = defaultTheme.colors.primary,
} : LoadingSpinnerProps) {
  return (
    <LoadingSpinnerBox data-testid="loading">
      <Spinner color={color} />
    </LoadingSpinnerBox>
  );
}
