import styled from 'styled-components';

import Button from '@/components/atoms/buttons/Button';
import { PaymentMethod } from '@/components/organisms/order/OrderPayment';
import Image from '@/components/atoms/images/Image';

import { breakpoints } from '@/styles/medias';
import { space } from '@/styles/sizes';
import defaultTheme from '@/styles/defaultTheme';

import { Color } from '@/types/color';

import { BRAND } from '@/constants';

const StyledPaymentMethodButtons = styled.div`
  display: flex;
  gap: ${space.s};

  ${breakpoints.tablet} {
    flex-direction: column;
  }
`;

type PaymentMethodButtonsProps = {
  paymentMethod: PaymentMethod;
  handleChangePaymentMethod: (paymentMethod: PaymentMethod) => void;
}

export default function PaymentMethodButtons({
  paymentMethod,
  handleChangePaymentMethod,
}: PaymentMethodButtonsProps) {
  return (
    <StyledPaymentMethodButtons>
      <Button
        type="button"
        backgroundColor={
          paymentMethod === BRAND.KAKAO_PAY.NAME
            ? BRAND.KAKAO_PAY.COLOR
            : (defaultTheme.colors.white as Color)
        }
        borderColor={
          paymentMethod === BRAND.KAKAO_PAY.NAME
            ? BRAND.KAKAO_PAY.COLOR
            : (defaultTheme.colors.border as Color)
        }
        onClick={() => handleChangePaymentMethod(BRAND.KAKAO_PAY.NAME as PaymentMethod)}
      >
        <Image
          width={50}
          alt="kakao-pay-logo-black"
          src="/assets/svg/kakao-pay-black-logo.svg"
        />
      </Button>
      <Button
        type="button"
        backgroundColor={
          paymentMethod === BRAND.TOSS_PAY.NAME
            ? BRAND.TOSS_PAY.COLOR
            : (defaultTheme.colors.white as Color)
        }
        borderColor={
          paymentMethod === BRAND.TOSS_PAY.NAME
            ? BRAND.TOSS_PAY.COLOR
            : (defaultTheme.colors.border as Color)
        }
        onClick={() => handleChangePaymentMethod(BRAND.TOSS_PAY.NAME as PaymentMethod)}
      >
        {paymentMethod === BRAND.TOSS_PAY.NAME
          ? <Image width={100} alt="toss-pay-logo-white" src="/assets/svg/toss-pay-white-logo.svg" />
          : <Image width={100} alt="toss-pay-logo-black" src="/assets/svg/toss-pay-black-logo.svg" />}
      </Button>
    </StyledPaymentMethodButtons>
  );
}
