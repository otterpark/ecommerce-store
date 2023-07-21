import { Cart } from '@/types/cart';

export type AddCartOption = {
  id: string;
  itemId: string;
}

export type AddCartRequest = {
  productId: string;
  options?: AddCartOption[];
  quantity: number;
}

export type GetCartResponse = Cart;
