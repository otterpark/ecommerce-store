import { ReactElement, useMemo } from 'react';
import styled from 'styled-components';

import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import PageWrap from '@/components/atoms/wrap/PageWrap';
import ProductsList from '@/components/molecules/products/list/ProductsList';

import { maxWidth } from '@/styles/sizes';

import { useRouter } from 'next/router';

import Layout from '../_layout';

const HomeContainer = styled.div``;

function CategoryPage() {
  const { id } = useRouter().query;

  const categoryId: string = useMemo(() => (Array.isArray(id) ? id[0] : id ?? ''), [id]);

  return (
    <HomeContainer>
      <PageWrap>
        <MaxWidthWrap
          maxWidth={maxWidth.full}
        >
          <ProductsList
            categoryId={categoryId}
          />
        </MaxWidthWrap>
      </PageWrap>
    </HomeContainer>
  );
}

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
};

export default CategoryPage;
