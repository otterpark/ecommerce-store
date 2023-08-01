import { Cart } from './cart';

export type Receiver = {
  name: string;
  address1: string;
  address2: string;
  postalCode: string;
  phoneNumber: string;
}

export type Payment = {
  merchantId: string;
  transactionId: string;
}

export type Order = {
  id: string;
  title: string;
  status: 'paid',
  orderedAt: string;
} & Cart;

export type OrderItem = {
  id: string;
  title: string;
  totalPrice: number;
  status: string;
  orderedAt: string;
}

export type OrderList = {
  orders: OrderItem[];
}
