import useSWR from 'swr';

import { GET_CATEGORIES, GET_PRODUCTS } from '@/api/url';

import useProductService from '@/services/productService';

import { Category, Product, ProductDetail } from '@/types/product';

export default function useProduct() {
  const { getCategories, getProduct, getProducts } = useProductService();

  const categories = useSWR<Category[]>(GET_CATEGORIES, getCategories);
  // eslint-disable-next-line max-len
  const products = (categoryId: string) => useSWR<Product[]>(`/api/${GET_PRODUCTS}?categoryId=${categoryId}`, () => getProducts(categoryId));

  const product = (productId: string) => useSWR<ProductDetail>(`${GET_PRODUCTS}/${productId}`, getProduct);

  return {
    categories,
    products,
    product,
  };
}
