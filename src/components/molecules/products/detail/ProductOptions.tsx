import styled from 'styled-components';

import ProductOption from '@/components/atoms/selects/ProductOption';

import { Item, ProductDetail } from '@/types/product';

import { borderRadius, space } from '@/styles/sizes';
import { breakpoints } from '@/styles/medias';

const Options = styled.ul`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${borderRadius.default};
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  background: white;
  z-index: 1;
  transition: all 0.3s;
  &:first-child {
    border-top: 0px;
  }

  ${breakpoints.tablet} {
    position: relative;
    top: 0;
    border-radius: 0;
    margin-top: ${space.s};
  }
`;

type ProductOptionsProps = {
  data: ProductDetail;
  index: number;
  handleOptionClick: (optionId: string, item: Item) => void;
}

export default function ProductOptions({
  data, index, handleOptionClick,
}: ProductOptionsProps) {
  return (
    <Options>
      {data.options[index].items.map((item: Item) => (
        <ProductOption
          key={item.id}
          option={data.options[index]}
          item={item}
          handleOptionClick={handleOptionClick}
        />
      ))}
    </Options>
  );
}
