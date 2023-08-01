import { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

import withAccessPermission from '@/components/hocs/withAccessPermission';
import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import PageWrap from '@/components/atoms/wrap/PageWrap';
import OrderPayment from '@/components/organisms/order/OrderPayment';

import useCart from '@/hooks/useCart';
import useAlert from '@/hooks/useAlert';

import { maxWidth } from '@/styles/sizes';

import { ERROR_MESSAGE } from '@/constants';

import Layout from '../layout';

function OrderPage() {
  const router = useRouter();

  const { cart } = useCart();
  const { showAlert } = useAlert();

  useEffect(() => {
    if (!cart.lineItems.length) {
      router.push('/');
      showAlert(ERROR_MESSAGE.ORDER.NULL_CART_DATA);
    }
  }, []);

  return (
    <PageWrap>
      <MaxWidthWrap
        maxWidth={maxWidth.full}
      >
        <OrderPayment />
      </MaxWidthWrap>
    </PageWrap>
  );
}

OrderPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
};

export default withAccessPermission(OrderPage, 'auth');
