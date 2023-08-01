import Sidebar from '@/components/atoms/sidebar/Sidebar';
import DescriptionList from '@/components/molecules/descriptionList/DescriptionList';
import Button from '@/components/atoms/buttons/Button';
import SidebarButton from '@/components/molecules/sidebar/SidebarButton';

import numberFormat from '@/utils/numberFormat';

import { space } from '@/styles/sizes';
import { useRouter } from 'next/router';

type CartSidebarProps = {
  totalPrice: number;
}

export default function CartSidebar({ totalPrice }: CartSidebarProps) {
  const router = useRouter();

  const handleClickMoveOrderPage = () => {
    router.push('/order');
  };

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
          isPrimary
          onClick={handleClickMoveOrderPage}
        >
          주문하기
        </Button>
      </SidebarButton>
    </Sidebar>
  );
}
