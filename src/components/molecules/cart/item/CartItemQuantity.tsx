import styled from 'styled-components';

import Text from '@/components/atoms/texts/Text';

import { breakpoints } from '@/styles/medias';

const Quantity = styled.div`
  width: 20px;
  text-align: center;
  flex: 1 1 0;

  ${breakpoints.largeDesktop} {
    display: none;
  }
`;

type CartItemQuantityProps = {
  quantity: number;
}

export default function CartItemQuantity({ quantity }: CartItemQuantityProps) {
  return (
    <Quantity>
      <Text
        textSize="s"
        textWeight="bold"
        textAlign="center"
        text={`${quantity}개`}
        color="text"
      />
    </Quantity>
  );
}
