import styled from 'styled-components';
import Header from '@/components/organisms/Header';
import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import PageWrap from '@/components/atoms/wrap/PageWrap';
import { maxWidth } from '@/styles/sizes';

const HomeContainer = styled.div``;

export default function HomePage() {
  return (
    <HomeContainer>
      <Header />
      <PageWrap>
        <MaxWidthWrap
          maxWidth={maxWidth.full}
        >
          Hello World!
        </MaxWidthWrap>
      </PageWrap>
    </HomeContainer>
  );
}
