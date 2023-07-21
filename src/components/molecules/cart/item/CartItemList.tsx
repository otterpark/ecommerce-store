import styled from 'styled-components';

import Image from '@/components/atoms/images/Image';

import { breakpoints } from '@/styles/medias';
import { space } from '@/styles/sizes';

import { CartLineItem } from '@/types/cart';

import CartItemQuantity from './CartItemQuantity';
import CartItemTitle from './CartItemTitle';
import CartItemTotalPrice from './CartItemTotalPrice';

const StyledCartItemList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1 0 70%;
  li {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: ${space.s} 0;
    border-top: 1px solid ${(props) => props.theme.colors.border};
    gap: ${space.s};
    :last-child {
      border-bottom: 1px solid ${(props) => props.theme.colors.border};
    }
  }
  ${breakpoints.desktop} {
    flex: 1 0 60%;
    li {
      gap: ${space.xs};
    }
  }
`;

type CartItemListProps = {
  lineItems: CartLineItem[];
}

export default function CartItemList({ lineItems }: CartItemListProps) {
  return (
    <StyledCartItemList>
      {lineItems.map((lineItem) => (
        <li key={lineItem.id}>
          <Image src={lineItem.product.thumbnail.url} width={60} />
          <CartItemTitle lineItem={lineItem} />
          <CartItemQuantity quantity={lineItem.quantity} />
          <CartItemTotalPrice totalPrice={lineItem.totalPrice} />
        </li>
      ))}
    </StyledCartItemList>
  );
}
