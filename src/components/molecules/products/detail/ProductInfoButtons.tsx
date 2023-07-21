import styled from 'styled-components';

import Button from '@/components/atoms/buttons/Button';
import Image from '@/components/atoms/images/Image';

import { space } from '@/styles/sizes';
import { breakpoints } from '@/styles/medias';

const StyledProductInfoButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${space.xs};
  button {
    :first-child {
      flex: 0 0 10rem;
    }
  }

  ${breakpoints.tablet} {
    padding: ${space.m} ${space.s} ${space.s};
    border-top: 1px solid ${(props) => props.theme.colors.border};
  }
`;

type ProductInfoButtonsProps = {
  handleAddCart: () => void;
};

export default function ProductInfoButtons({ handleAddCart }: ProductInfoButtonsProps) {
  return (
    <StyledProductInfoButtons>
      <Button
        onClick={handleAddCart}
      >
        <Image
          src="/assets/icons/shopping-cart.png"
          alt="shopping-cart-icon"
          width={20}
          height={20}
        />
      </Button>
      <Button isPrimary>주문하기</Button>
    </StyledProductInfoButtons>
  );
}
