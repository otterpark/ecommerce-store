import { fontSize, space } from '@/styles/sizes';
import styled from 'styled-components';

const Content = styled.p`
  padding: ${space.m} ${space.l};
  font-size: ${fontSize.default};
  line-height: ${fontSize.m};
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  white-space: pre-line;
  word-break: keep-all;
`;

type ModalContentProps = {
  message: string;
}

export default function ModalContent({ message }: ModalContentProps) {
  return (
    <Content>{message}</Content>
  );
}
