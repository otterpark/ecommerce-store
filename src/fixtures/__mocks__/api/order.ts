import { Order, OrderList } from '@/types/order';

export const mockOrderList: OrderList = {
  orders: [
    {
      id: '01H6DAEAGQ7SEA7M6VRX2D0MQ2',
      title: 'CBCL 레이어드 탑',
      status: 'paid',
      totalPrice: 89000,
      orderedAt: '2023-07-28 03:59:53',
    },
    {
      id: '01H6DH96C270XNZ2NXJJ9Y45BA',
      title: 'CBCL 하트자수셋업조거',
      status: 'paid',
      totalPrice: 138000,
      orderedAt: '2023-07-28 05:59:25',
    },
    {
      id: '01H6DJ1ETR0QX7130274JSWGW6',
      title: 'CBCL 하트자수셋업조거',
      status: 'paid',
      totalPrice: 138000,
      orderedAt: '2023-07-28 06:12:40',
    },
    {
      id: '01H6DRN4R5ND9C8BRXVGQ0NGX2',
      title: 'CBCL 레이어드 탑',
      status: 'paid',
      totalPrice: 89000,
      orderedAt: '2023-07-28 08:08:17',
    },
  ],
};
export const mockOrder: Order = {
  id: '0BV000ODR0001',
  title: '맨투맨',
  lineItems: [
    {
      id: '0BV000OLI0001',
      product: {
        id: '0BV000PRO0001',
        thumbnail: {
          url: 'https://example.com/products/01.jpg',
        },
        name: '맨투맨',
      },
      options: [
        {
          name: '컬러',
          item: {
            name: 'black',
          },
        },
        {
          name: '사이즈',
          item: {
            name: 'M',
          },
        },
      ],
      unitPrice: 128000,
      quantity: 2,
      totalPrice: 256000,
    },
  ],
  totalPrice: 256000,
  status: 'paid',
  orderedAt: '2023-01-01 00:00:00',
};
