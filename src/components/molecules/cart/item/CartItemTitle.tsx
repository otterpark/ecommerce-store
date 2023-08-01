import Link from 'next/link';
import styled from 'styled-components';

import Text from '@/components/atoms/texts/Text';

import useWindowSize from '@/hooks/useWindowResize';

import { breakpoints, size } from '@/styles/medias';
import { CartLineItem, CartOption } from '@/types/cart';

const StyledCartItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;
  width: 60%;
  a {
    display: flex;
    text-decoration: none;
  }

  ${breakpoints.largeDesktop} {
    width: 65%;
  }

  ${breakpoints.desktop} {
    width: 60%;
  }

  ${breakpoints.tablet} {
    width: 65%;
  }
`;

type CartItemTitleProps = {
  lineItem: CartLineItem;
}

export default function CartItemTitle({ lineItem }: CartItemTitleProps) {
  const windowSize = useWindowSize();

  const optionText = (options: CartOption[]) => options
    .map((option) => `${option.name}: ${option.item.name}`)
    .join(', ');

  return (
    <StyledCartItemTitle>
      <Link href={`/products/${lineItem.product.id}`}>
        <Text
          textSize="default"
          textAlign="left"
          textWeight="bold"
          text={lineItem.product.name}
          color="text"
        />
        { windowSize.width < size.largeDesktop
          && (
            <Text
              textSize="s"
              textWeight="bold"
              textAlign="center"
              text={`(${lineItem.quantity})`}
              color="text"
            />
          )}
      </Link>
      <Text
        textSize="s"
        textAlign="left"
        text={optionText(lineItem.options)}
        color="gray"
      />
    </StyledCartItemTitle>
  );
}
