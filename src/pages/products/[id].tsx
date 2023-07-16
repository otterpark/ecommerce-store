import { ReactElement, useMemo } from 'react';
import { useRouter } from 'next/router';

import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import PageWrap from '@/components/atoms/wrap/PageWrap';
import ProductDetail from '@/components/organisms/products/ProductDetail';

import { maxWidth } from '@/styles/sizes';

import Layout from '../_layout';

function ProductsDetailPage() {
  const { id } = useRouter().query;

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
