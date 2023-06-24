import styled from 'styled-components';
import Header from '@/components/organisms/Header';
import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import defaultTheme from '@/styles/defaultTheme';

const Container = styled.div`
`;

export default function Home() {
  return (
    <Container>
      <Header />
      <MaxWidthWrap
        maxWidth={defaultTheme.maxWidth.full}
      >
        Hello World!
      </MaxWidthWrap>
    </Container>
  );
}
