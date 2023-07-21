import { ReactElement } from 'react';

import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import PageWrap from '@/components/atoms/wrap/PageWrap';
import CartList from '@/components/organisms/cart/cartList';

import { maxWidth } from '@/styles/sizes';

import Layout from '../layout';

function CartPage() {
  return (
    <PageWrap>
      <MaxWidthWrap
        maxWidth={maxWidth.full}
      >
        <CartList />
      </MaxWidthWrap>
    </PageWrap>
  );
}

CartPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
};

export default CartPage;
