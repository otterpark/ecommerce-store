import styled from 'styled-components';

import OrderForm from '@/components/organisms/forms/OrderForm';
import CartProductList from '@/components/molecules/order/CartProductList';
import DescriptionList from '@/components/molecules/descriptionList/DescriptionList';
import PaymentMethodButtons from '@/components/molecules/order/PaymentMethodButtons';
import Text from '@/components/atoms/texts/Text';

import { space } from '@/styles/sizes';

import { Cart } from '@/types/cart';

import { PaymentMethod } from './OrderPayment';

const OrderSection = styled.section`
  margin-bottom: ${space.l};
`;

const StyledOrderPaymentContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 70%;
`;

type OrderPaymentContentProps = {
  name: string;
  phoneNumber: string;
  postalCode: string;
  address: string;
  addressDetail: string;
  cart: Cart;
  paymentMethod: PaymentMethod;
  setName: (name: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setPostalCode: (postalCode: string) => void;
  setAddress: (address: string) => void;
  setAddressDetail: (addressDetail: string) => void;
  handleChangePaymentMethod: (PaymentMethodType: PaymentMethod) => void;
}

export default function OrderPaymentContent({
  name, phoneNumber, postalCode, address, addressDetail,
  setName, setPhoneNumber, setPostalCode, setAddress, setAddressDetail, handleChangePaymentMethod,
  cart, paymentMethod,
}: OrderPaymentContentProps) {
  return (
    <StyledOrderPaymentContent>
      <OrderSection>
        <CartProductList cartItems={cart.lineItems} />
      </OrderSection>
      <OrderSection>
        <OrderForm
          name={name}
          phoneNumber={phoneNumber}
          postalCode={postalCode}
          address={address}
          addressDetail={addressDetail}
          setName={setName}
          setPhoneNumber={setPhoneNumber}
          setPostalCode={setPostalCode}
          setAddress={setAddress}
          setAddressDetail={setAddressDetail}
        />
      </OrderSection>
      <OrderSection>
        <Text
          textSize="m"
          textAlign="left"
          text="결제 수단"
          color="text"
          pb="xs"
        />
        <DescriptionList
          listTitle="결제수단 선택"
          padding={`${space.xxs}`}
          isMobileHidedt
        >
          <PaymentMethodButtons
            paymentMethod={paymentMethod}
            handleChangePaymentMethod={handleChangePaymentMethod}
          />
        </DescriptionList>
      </OrderSection>
    </StyledOrderPaymentContent>
  );
}
