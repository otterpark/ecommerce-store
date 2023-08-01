/* eslint-disable no-unused-expressions */
import { api } from '@/api/call';
import {
  GetOrderListResponse, GetOrderResponse, OrderCartRequest,
} from '@/api/types/order';
import { GET_ORDER_LIST, ORDER_CART } from '@/api/url';
import { Order } from '@/types/order';
import { BareFetcher } from 'swr';

const useOrderService = () => {
  const orderCart = (
    body: Partial<OrderCartRequest>,
    onSuccess?: () => void,
    onError?: () => void,
  ) => {
    api.post<OrderCartRequest, any>(
      ORDER_CART,
      body,
    )
      .then(
        (response: any) => {
          onSuccess && onSuccess();
        },
      )
      .catch(() => {
        onError && onError();
      });
  };

  const getOrderList = (
    onSuccess?: (orders: GetOrderListResponse) => void,
    onError?: () => void,
  ) => {
    api.get<any, GetOrderListResponse>(
      GET_ORDER_LIST,
    )
      .then(
        (response: GetOrderListResponse) => {
          const orders = response;
          onSuccess && onSuccess(orders);
        },
      )
      .catch(() => {
        onError && onError();
      });
  };

  const getOrder: BareFetcher<Order> = (url: string) => api.get<any, GetOrderResponse>(
    url,
  ).then(
    (response: GetOrderResponse) => response,
  );

  return {
    orderCart, getOrderList, getOrder,
  };
};

export default useOrderService;
