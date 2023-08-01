import { useMemo, useState } from 'react';

import Text from '@/components/atoms/texts/Text';
import Button from '@/components/atoms/buttons/Button';
import CartItemList from '@/components/molecules/cart/item/CartItemList';
import { Cart } from '@/types/cart';

type CartProductListProps = {
  cartItems: Cart['lineItems']
}

export default function CartProductList({ cartItems }: CartProductListProps) {
  const [isOpenOrderList, setIsOpenOrderList] = useState<boolean>(false);
  const orderName = useMemo(() => ((cartItems.length > 0) ? `[${cartItems[0].product.name}] 포함 ${cartItems.length}개의 상품을 주문합니다.` : ''), [cartItems]);

  const handleClickToggleOrderList = () => {
    setIsOpenOrderList(!isOpenOrderList);
  };

  return (
    <>
      <Text
        textSize="m"
        textAlign="left"
        text="주문 상품"
        color="text"
        pb="xs"
        mb="xs"
      />
      {(isOpenOrderList)
        ? <CartItemList lineItems={cartItems} />
        : <Text textSize="default" textAlign="center" text={orderName} color="text" />}
      <Button
        type="button"
        isBorder={false}
        onClick={handleClickToggleOrderList}
      >
        <Text textSize="s" textAlign="center" text={(isOpenOrderList) ? '숨기기' : '자세히보기'} isTextDecoration color="primary" />
      </Button>
    </>
  );
}
