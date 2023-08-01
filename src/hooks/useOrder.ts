import useSWR from 'swr';

import useOrderService from '@/services/orderService';

import { GET_ORDER } from '@/api/url';

import { Order } from '@/types/order';

export default function useOrder() {
  const { getOrder } = useOrderService();

  const order = (orderId: string) => useSWR<Order>(`${GET_ORDER}/${orderId}`, getOrder);

  return {
    order,
  };
}
