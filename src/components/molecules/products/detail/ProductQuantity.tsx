import styled from 'styled-components';

import Button from '@/components/atoms/buttons/Button';
import Image from '@/components/atoms/images/Image';
import InputText from '@/components/molecules/inputs/InputText';

import { space } from '@/styles/sizes';

const Quantity = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: ${space.xs};
  button, input {
    text-align: center;
    display: flex;
    align-items: start;
  }
`;

type ProductQuantityProps = {
  quantity: number
  handleClickIncrease: () => void;
  handleClickDecrease: () => void;
}

export default function ProductQuantity({
  quantity, handleClickIncrease, handleClickDecrease,
}: ProductQuantityProps) {
  return (
    <Quantity>
      <Button
        onClick={handleClickDecrease}
        width="30px"
        padding={space.xxs}
        height="auto"
      >
        <Image
          src="/assets/icons/minus.png"
          alt="minus-icon"
          width={15}
          height={15}
        />
      </Button>
      <InputText isBorderNone type="text" label="quantity" padding="0" value={quantity} width="18px" height="auto" readOnly />
      <Button
        onClick={handleClickIncrease}
        padding={space.xxs}
        width="30px"
        height="auto"
      >
        <Image
          src="/assets/icons/plus.png"
          alt="plus-icon"
          width={15}
          height={15}
        />
      </Button>
    </Quantity>
  );
}
