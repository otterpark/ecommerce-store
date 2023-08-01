import Sidebar from '@/components/atoms/sidebar/Sidebar';
import DescriptionList from '@/components/molecules/descriptionList/DescriptionList';
import SidebarButton from '@/components/molecules/sidebar/SidebarButton';
import Button from '@/components/atoms/buttons/Button';

import numberFormat from '@/utils/numberFormat';

import { space } from '@/styles/sizes';

type OrderSidebarProps = {
  totalPrice: number;
  isValidCheck: boolean;
  handleClickPayment: () => void;
}

export default function OrderSidebar({
  totalPrice,
  isValidCheck,
  handleClickPayment,
}: OrderSidebarProps) {
  return (
    <Sidebar>
      <DescriptionList
        listTitle="상품금액"
        isSpaceBetween
        padding={`${space.xs}`}
      >
        {`${numberFormat(totalPrice)} 원`}
      </DescriptionList>
      <DescriptionList
        listTitle="배송비"
        isSpaceBetween
        isBorder={false}
        padding={`${space.xs}`}
      >
        0원
      </DescriptionList>
      <DescriptionList
        listTitle="할인금액"
        isSpaceBetween
        isBorder={false}
        padding={`${space.xs}`}
      >
        0원
      </DescriptionList>
      <DescriptionList
        listTitle="결제예정금액"
        isSpaceBetween
        isTextBold
        padding={`${space.s} ${space.xs}`}
      >
        {`${numberFormat(totalPrice)} 원`}
      </DescriptionList>
      <SidebarButton>
        <Button
          type="button"
          isDisabled={!isValidCheck}
          isPrimary
          onClick={handleClickPayment}
        >
          결제하기
        </Button>
      </SidebarButton>
    </Sidebar>
  );
}
