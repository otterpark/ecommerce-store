import { fontSize } from '@/styles/sizes';
import styled from 'styled-components';

type PageTitleProps = {
  title: string;
  mb: string;
}

type StyledTitleProps = Pick<PageTitleProps, 'mb'>

const Title = styled.h2<StyledTitleProps>`
  font-size: ${fontSize.l};
  font-weight: 700;
  text-align: center;
  margin-bottom: ${(props) => props.mb};
`;

export default function PageTitle({
  title, mb,
}: PageTitleProps) {
  return (
    <Title mb={mb}>{title}</Title>
  );
}
