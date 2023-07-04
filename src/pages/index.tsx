import styled from 'styled-components';
import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import PageWrap from '@/components/atoms/wrap/PageWrap';
import { maxWidth } from '@/styles/sizes';

const HomeContainer = styled.div``;

export default function HomePage() {
  return (
    <HomeContainer>
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
