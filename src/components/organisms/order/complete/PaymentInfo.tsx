import styled from 'styled-components';
import dayjs from 'dayjs';

import Button from '@/components/atoms/buttons/Button';
import DescriptionList from '@/components/molecules/descriptionList/DescriptionList';

import { PAYMENT } from '@/constants';

import { maxWidth, space } from '@/styles/sizes';

import numberFormat from '@/utils/numberFormat';
import { Order } from '@/types/order';

const StyledPaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${maxWidth.middle}px;
  width: 100%;
  margin: ${space.m} auto;
`;

const NavigationButton = styled.div`
  margin-top: ${space.s};
`;

type PaymentInfoProps = {
  orderPaymentInfo: Order;
  handleClickMoveHome: () => void;
}

export default function PaymentInfo({
  orderPaymentInfo, handleClickMoveHome,
}: PaymentInfoProps) {
  const paymentStatus = {
    paid: PAYMENT.STATUS.PAID,
  };

  return (
    <StyledPaymentInfo>
      <DescriptionList
        listTitle="결제 날짜"
        isSpaceBetween
        isBorder={false}
        padding={`${space.xs}`}
      >
        {`${dayjs(orderPaymentInfo.orderedAt).format('YYYY-MM-DD HH:mm')}`}
      </DescriptionList>
      <DescriptionList
        listTitle="결제 상태"
        isSpaceBetween
        isBorder={false}
        padding={`${space.xs}`}
      >
        {paymentStatus[orderPaymentInfo.status]}
      </DescriptionList>
      <DescriptionList
        listTitle="총 결제 금액"
        isSpaceBetween
        isTextBold
        isBorder={false}
        padding={`${space.xs}`}
      >
        {`${numberFormat(orderPaymentInfo.totalPrice)} 원`}
      </DescriptionList>
      <NavigationButton>
        <Button
          type="button"
          isPrimary
          onClick={handleClickMoveHome}
        >
          메인으로 이동하기
        </Button>
      </NavigationButton>
    </StyledPaymentInfo>
  );
}
