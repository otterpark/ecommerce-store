import { ReactElement, useMemo } from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import PageWrap from '@/components/atoms/wrap/PageWrap';
import ProductDetail from '@/components/organisms/products/ProductDetail';

import { maxWidth } from '@/styles/sizes';

import Layout from '../layout';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query.id ?? '';
  return { props: { id } };
}

function ProductsDetailPage({ id }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const productId: string = useMemo(() => (Array.isArray(id) ? id[0] : id ?? ''), [id]);

  return (
    <PageWrap>
      <MaxWidthWrap
        maxWidth={maxWidth.full}
      >
        <ProductDetail productId={productId} />
      </MaxWidthWrap>
    </PageWrap>
  );
}

ProductsDetailPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
};

export default ProductsDetailPage;
