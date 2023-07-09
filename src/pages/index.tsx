import { ReactElement } from 'react';
import styled from 'styled-components';

import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import PageWrap from '@/components/atoms/wrap/PageWrap';

import { maxWidth } from '@/styles/sizes';

import useProduct from '@/hooks/useProduct';

import Layout from './_layout';

const HomeContainer = styled.div``;

function HomePage() {
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

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
};

export default HomePage;
