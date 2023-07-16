import styled from 'styled-components';

import Text from '@/components/atoms/texts/Text';

import { space } from '@/styles/sizes';

import numberFormat from '@/utils/numberFormat';

const StyledProductInfoBody = styled.div`
  margin-top: ${space.m};
`;

type ProductInfoBodyProps = {
  name: string;
  price: number;
  description: string;
}

export default function ProductInfoBody({
  name, price, description,
} : ProductInfoBodyProps) {
  return (
    <StyledProductInfoBody>
      <Text
        textSize="l"
        textWeight="normal"
        textAlign="left"
        text={name}
        color="text"
        mb="xxs"
      />
      <Text
        textSize="m"
        textWeight="bold"
        textAlign="left"
        text={`${numberFormat(price)} 원`}
        color="text"
        mb="m"
      />
      <Text
        textSize="default"
        textWeight="normal"
        textAlign="left"
        text={description}
        color="text"
        mb="l"
      />
    </StyledProductInfoBody>
  );
}
