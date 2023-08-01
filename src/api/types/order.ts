import {
  Order, OrderList, Payment, Receiver,
} from '@/types/order';

export type OrderCartRequest = {
  receiver: Receiver;
  payment: Payment;
}

export type GetOrderListResponse = OrderList;

export type GetOrderRequestParams = {
  id: string;
}

export type GetOrderResponse = Order;
