import styled from 'styled-components';

import { fontSize, space } from '@/styles/sizes';

import { Item, Option } from '@/types/product';

const StyledOption = styled.li`
  margin-bottom: 0;
  list-style: none;
  padding: ${space.xs} ${space.xs};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  font-size: ${fontSize.s};
  :last-child {
    border-bottom: 0;
  }
`;

type ProductOptionProps = {
  option: Option;
  item: Item;
  handleOptionClick: (optionId: string, itemId: string) => void;
}

export default function ProductOption({
  option, item, handleOptionClick,
}: ProductOptionProps) {
  return (
    <StyledOption
      data-testid={`item-${item.name}`}
      onClick={() => handleOptionClick(option.id, item.id)}
    >
      {item.name}
    </StyledOption>
  );
}
