import { ReactElement, useMemo } from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import styled from 'styled-components';

import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import PageWrap from '@/components/atoms/wrap/PageWrap';
import ProductsList from '@/components/molecules/products/list/ProductsList';

import { maxWidth } from '@/styles/sizes';

import Layout from '../layout';

const HomeContainer = styled.div``;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query.id ?? '';
  return { props: { id } };
}

function CategoryPage({ id }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
