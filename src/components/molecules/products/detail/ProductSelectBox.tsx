import styled from 'styled-components';

import { SelectedOptions } from '@/components/organisms/products/ProductDetail';
import Image from '@/components/atoms/images/Image';
import ProductOptions from '@/components/molecules/products/detail/ProductOptions';

import { Item, ProductDetail } from '@/types/product';

const StyledSelectBox = styled.div`
  position: relative;
  cursor: pointer;
`;

const SelectedOption = styled.div`
`;

type ProductSelectBoxProps = {
  data: ProductDetail;
  openSelect: string | null;
  index: number;
  selectedOptions: SelectedOptions
  toggleDropdown: (optionId: string) => void;
  handleOptionClick: (optionId: string, itemId: string) => void;
}

const Arrow = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export default function ProductSelectBox({
  data, openSelect, index, selectedOptions, toggleDropdown, handleOptionClick,
}: ProductSelectBoxProps) {
  const option = data.options[index];

  // eslint-disable-next-line max-len
  const findSelectName = (optionId: string) => data.options[index].items.find((item) => item.id === optionId)?.name;

  return (
    <StyledSelectBox
      onClick={() => toggleDropdown(option.id)}
      key={option.id}
      data-testid="select-box"
    >
      <SelectedOption
        data-testid={`select-option-${option.name}`}
      >
        {findSelectName(selectedOptions[index]?.itemId)}
      </SelectedOption>
      <Arrow>
        <Image
          src="/assets/icons/unfold.png"
          alt="unfold-icon"
          width={30}
        />
      </Arrow>
      {openSelect === option.id && (
        <ProductOptions
          data={data}
          index={index}
          handleOptionClick={handleOptionClick}
        />
      )}
    </StyledSelectBox>
  );
}
