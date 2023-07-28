import useSWR from 'swr';

import { GET_CATEGORIES, GET_PRODUCT_LIST, GET_PRODUCT } from '@/api/url';

import useProductService from '@/services/productService';

import { Category, Product, ProductDetail } from '@/types/product';

export default function useProduct() {
  const { getCategories, getProduct, getProductList } = useProductService();

  const categories = useSWR<Category[]>(GET_CATEGORIES, getCategories);
  // eslint-disable-next-line max-len
  const productList = (categoryId: string) => useSWR<Product[]>(`/api/${GET_PRODUCT_LIST}?categoryId=${categoryId}`, () => getProductList(categoryId));

  const product = (productId: string) => useSWR<ProductDetail>(`${GET_PRODUCT}/${productId}`, getProduct);

  return {
    categories,
    productList,
    product,
  };
}
