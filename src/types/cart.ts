import { Item, ProductDetail, Thumbnail } from './product';

export type CartOption = {
  name: string;
  item: Pick<Item, 'name'>;
}

export type CartProduct = {
  thumbnail: Thumbnail;
} & Pick<ProductDetail, 'name' | 'id'>;

export type CartLineItem = {
  id: string;
  product: CartProduct;
  options: CartOption[];
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export type Cart = {
  lineItems: CartLineItem[];
  totalPrice: number;
}
