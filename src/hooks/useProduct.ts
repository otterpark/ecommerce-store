import useSWR from 'swr';

import { GET_CATEGORIES } from '@/api/url';

import useProductService from '@/services/productService';

import { Category } from '@/types/product';

export default function useProduct() {
  const { getCategories } = useProductService();

  const categories = useSWR<Category[]>(GET_CATEGORIES, getCategories);

  return {
    categories,
  };
}
