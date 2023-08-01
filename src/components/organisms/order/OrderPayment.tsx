import {
  useEffect, useMemo, useState,
} from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Script from 'next/script';

import PageTitle from '@/components/atoms/texts/PageTitle';
import OrderSidebar from '@/components/molecules/order/OrderSidebar';
import OrderPaymentContent from '@/components/organisms/order/OrderPaymentContent';

import { breakpoints } from '@/styles/medias';
import { space } from '@/styles/sizes';

import useCart from '@/hooks/useCart';
import useAuth from '@/hooks/useAuth';
import useAlert from '@/hooks/useAlert';

import useOrderService from '@/services/orderService';

import { RequestPayParams, RequestPayResponse } from '@/types/iamport';

import { BRAND, ERROR_MESSAGE, PAYMENT } from '@/constants';

import { OrderCartRequest } from '@/api/types/order';

const OrderWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${space.m};

  ${breakpoints.tablet} {
    flex-direction: column;
  }
`;

export type PaymentMethod = RequestPayParams['pg'];

export default function OrderPayment() {
  const router = useRouter();
  const [isScriptLoading, setIsScriptLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('kakaopay');

  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [addressDetail, setAddressDetail] = useState<string>('');

  const { cart, resetCart } = useCart();
  const { auth } = useAuth();
  const { showAlert } = useAlert();

  const { orderCart, getOrderList } = useOrderService();

  const phoneNumberRegEx = /^[0-9\b]{10,13}$/;

  useEffect(() => {
    if (!isScriptLoading) {
      Reflect.get(window, 'IMP').init(process.env.NEXT_PUBLIC_PORTONE_IMP);
    }
  }, [isScriptLoading]);

  const handleChangePaymentMethod = (paymentMethodType: PaymentMethod) => {
    setPaymentMethod(paymentMethodType);
  };

  const handleClickPayment = () => {
    const { IMP } = window;

    const pg = (paymentMethod === BRAND.KAKAO_PAY.NAME)
      ? process.env.NEXT_PUBLIC_PORTONE_KAKAO_PG_CODE
      : process.env.NEXT_PUBLIC_PORTONE_TOSS_PG_CODE;

    const now = new Date();
    const date = now.toISOString().slice(0, 10).replace(/-/g, '');
    const time = now.getTime();
    const nonce = Math.random().toString().slice(-5);
    const merchantId = `ORDER-${date}-${time}${nonce}`;

    IMP.request_pay({
      pg,
      name,
      pay_method: PAYMENT.METHOD.CARD,
      merchant_uid: merchantId,
      amount: cart.totalPrice,
      // auth에서 이메일을 받아서 넣어줘야 하지만 API 미구현으로 인해 하드코딩
      buyer_email: 'otterpark94@gmail.com',
      buyer_name: auth.userInfo.name,
      buyer_tel: phoneNumber,
      buyer_addr: address + addressDetail,
      buyer_postcode: postalCode,
    }, (response: RequestPayResponse) => {
      if (response.success) {
        const requestOrderCart: OrderCartRequest = {
          receiver: {
            name,
            address1: address,
            address2: addressDetail,
            postalCode,
            phoneNumber,
          },
          payment: {
            merchantId: response.merchant_uid,
            transactionId: (response.pg_tid as string),
          },
        };
        orderCart(
          requestOrderCart,
          async () => {
            await getOrderList((orderList) => {
              const { orders } = orderList;
              router.push(`/order/complete/${orders[orders.length - 1].id}`);
            });
            resetCart();
          },
          () => {
            showAlert(ERROR_MESSAGE.ORDER.FAIL_ORDER);
          },
        );
      } else {
        showAlert(ERROR_MESSAGE.ORDER.FAIL_PAYMENT);
      }
    });
  };

  const isValidCheck = useMemo(() => {
    if (name.length === 0
      || postalCode.length === 0
      || address.length === 0
      || addressDetail.length === 0) return false;
    return phoneNumberRegEx.test(phoneNumber);
  }, [name, phoneNumber, postalCode, address, addressDetail]);

  return (
    <>
      <PageTitle title="주문서" mb={space.m} />
      <OrderWrap>
        <OrderPaymentContent
          name={name}
          phoneNumber={phoneNumber}
          postalCode={postalCode}
          address={address}
          addressDetail={addressDetail}
          cart={cart}
          paymentMethod={paymentMethod}
          setName={setName}
          setPhoneNumber={setPhoneNumber}
          setPostalCode={setPostalCode}
          setAddress={setAddress}
          setAddressDetail={setAddressDetail}
          handleChangePaymentMethod={handleChangePaymentMethod}
        />
        <OrderSidebar
          totalPrice={cart.totalPrice}
          isValidCheck={isValidCheck}
          handleClickPayment={handleClickPayment}
        />
      </OrderWrap>
      <Script
        src="https://cdn.iamport.kr/v1/iamport.js"
        onLoad={() => setIsScriptLoading(false)}
      />
    </>
  );
}
