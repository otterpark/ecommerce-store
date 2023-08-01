import { useRouter } from 'next/router';
import styled from 'styled-components';

import LoadingSpinner from '@/components/atoms/Loading';
import PageTitle from '@/components/atoms/texts/PageTitle';
import ErrorMessage from '@/components/molecules/Error/ErrorMessage';
import CartItemList from '@/components/molecules/cart/item/CartItemList';

import { ERROR_MESSAGE } from '@/constants';

import useOrder from '@/hooks/useOrder';

import { space } from '@/styles/sizes';

import PaymentInfo from './PaymentInfo';

const StyledOrderPaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

type OrderPaymentInfoProps = {
  orderId: string;
}

export default function OrderPaymentInfo({ orderId }: OrderPaymentInfoProps) {
  const router = useRouter();

  const { order } = useOrder();
  const { data, error, isLoading } = order(orderId);

  const handleClickMoveHome = () => {
    router.push('/');
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !data) {
    return (
      <ErrorMessage message={ERROR_MESSAGE.PAGE.SERVER_ERROR} />
    );
  }
  return (
    <>
      <PageTitle title="결제가 완료되었습니다" mb={space.m} />
      <StyledOrderPaymentInfo>
        <CartItemList lineItems={data.lineItems} />
        <PaymentInfo
          orderPaymentInfo={data}
          handleClickMoveHome={handleClickMoveHome}
        />
      </StyledOrderPaymentInfo>
    </>
  );
}
