import useSWR from 'swr';

import { GET_CATEGORIES, GET_PRODUCTS, GET_PRODUCT_DETAIL } from '@/api/url';

import useProductService from '@/services/productService';

import { Category, Product, ProductDetail } from '@/types/product';

export default function useProduct() {
  const { getCategories, getProductDetail, getProducts } = useProductService();

  const categories = useSWR<Category[]>(GET_CATEGORIES, getCategories);
  // eslint-disable-next-line max-len
  const products = (categoryId: string) => useSWR<Product[]>(`/api/${GET_PRODUCTS}?categoryId=${categoryId}`, () => getProducts(categoryId));

  const productDetail = (productId: string) => useSWR<ProductDetail>(`${GET_PRODUCT_DETAIL}/${productId}`, getProductDetail);

  return {
    categories,
    products,
    productDetail,
  };
}
