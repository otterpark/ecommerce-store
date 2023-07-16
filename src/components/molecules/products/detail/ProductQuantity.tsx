import styled from 'styled-components';

import Button from '@/components/atoms/buttons/Button';
import Image from '@/components/atoms/images/Image';
import InputText from '@/components/molecules/inputs/InputText';

import { space } from '@/styles/sizes';

const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${space.xs};
  button, input {
    flex: 1 1 0;
    text-align: center;
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
      >
        <Image
          src="/assets/icons/minus.png"
          alt="minus-icon"
          width={15}
          height={15}
        />
      </Button>
      <InputText type="text" label="quantity" padding={`${space.xs} 0`} value={quantity} readOnly />
      <Button onClick={handleClickIncrease}>
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
