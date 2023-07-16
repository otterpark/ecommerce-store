import styled from 'styled-components';

import Text from '@/components/atoms/texts/Text';

import numberFormat from '@/utils/numberFormat';

import { space } from '@/styles/sizes';
import { breakpoints } from '@/styles/medias';

const StyledProductTotalPrice = styled.div`
  display: flex;
  gap: ${space.s};
  justify-content: right;
  padding: 0 ${space.xs};
  margin: ${space.l} 0;
  align-items: center;

  ${breakpoints.tablet} {
    padding: 0 ${space.s};
    margin: ${space.s} 0;
    justify-content: space-between;
  }
`;

type ProductTotalPriceProps = {
  price: number;
  quantity: number;
}

export default function ProductTotalPrice({
  price, quantity,
}: ProductTotalPriceProps) {
  return (
    <StyledProductTotalPrice>
      <Text
        textSize="s"
        textAlign="left"
        textWeight="normal"
        text="총 상품금액:"
        color="text"
      />
      <Text
        textSize="m"
        textAlign="left"
        textWeight="bold"
        text={`${numberFormat(price * quantity)} 원`}
        color="text"
      />
    </StyledProductTotalPrice>
  );
}
