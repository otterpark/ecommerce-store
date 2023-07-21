import styled from 'styled-components';

import Button from '@/components/atoms/buttons/Button';

import { breakpoints } from '@/styles/medias';
import { space } from '@/styles/sizes';

const OrderButton = styled.div`
  ${breakpoints.tablet} {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.white};
    border-top: 1px solid ${(props) => props.theme.colors.border};
    padding: ${space.m} ${space.s} ${space.s};
  }
`;
export default function CartOrderButton() {
  return (
    <OrderButton>
      <Button type="button" isPrimary>주문하기</Button>
    </OrderButton>
  );
}
