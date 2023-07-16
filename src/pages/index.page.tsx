import { ReactElement } from 'react';
import styled from 'styled-components';

import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import PageWrap from '@/components/atoms/wrap/PageWrap';

import { maxWidth } from '@/styles/sizes';

import ProductsList from '@/components/molecules/products/list/ProductsList';
import Layout from './layout';

const HomeContainer = styled.div``;

function HomePage() {
  return (
    <HomeContainer>
      <PageWrap>
        <MaxWidthWrap
          maxWidth={maxWidth.full}
        >
          <ProductsList />
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
