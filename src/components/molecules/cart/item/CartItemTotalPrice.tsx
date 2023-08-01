import styled from 'styled-components';

import Text from '@/components/atoms/texts/Text';

import numberFormat from '@/utils/numberFormat';

import { breakpoints } from '@/styles/medias';

const TotalPrice = styled.div`
  flex: 1 1 0;
  ${breakpoints.desktop} {
    width: auto;
  }

  ${breakpoints.tablet} {
    padding-left: 0;
  }

  ${breakpoints.mobile} {
    flex: none;
    padding-left: 7rem;
  }
`;

type CartItemTotalPriceProps = {
  totalPrice: number;
}

export default function CartItemTotalPrice({ totalPrice }: CartItemTotalPriceProps) {
  return (
    <TotalPrice>
      <Text
        textSize="default"
        textWeight="bold"
        textAlign="right"
        text={`${numberFormat(totalPrice)} 원`}
        color="text"
      />
    </TotalPrice>
  );
}
