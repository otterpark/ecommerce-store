import {
  FunctionComponent,
  ReactElement, useMemo,
} from 'react';
import {
  GetServerSidePropsContext,
} from 'next';

import withAccessPermission from '@/components/hocs/withAccessPermission';
import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import PageWrap from '@/components/atoms/wrap/PageWrap';
import OrderPaymentInfo from '@/components/organisms/order/complete/OrderPaymentInfo';

import { NextPagePropsWithId, NextPageWithLayout } from '@/types/nextPage';

import { maxWidth } from '@/styles/sizes';

import Layout from '../../layout';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query.id ?? '';
  return { props: { id } };
}

function OrderCompletePage({
  id,
}: NextPagePropsWithId) {
  const orderId: string = useMemo(() => (Array.isArray(id) ? id[0] : id ?? ''), [id]);

  return (
    <PageWrap>
      <MaxWidthWrap
        maxWidth={maxWidth.full}
      >
        <OrderPaymentInfo orderId={orderId} />
      </MaxWidthWrap>
    </PageWrap>
  );
}

OrderCompletePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
};

export default withAccessPermission(OrderCompletePage as FunctionComponent<NextPagePropsWithId> & NextPageWithLayout, 'auth');
