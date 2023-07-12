/* eslint-disable no-unused-expressions */
import { api } from '@/api/call';
import {
  GetCategoriesResponse, GetProductResponse, GetProductsRequestParams, GetProductsResponse,
} from '@/api/types/product';
import { GET_PRODUCTS } from '@/api/url';
import { Category, Product, ProductDetail } from '@/types/product';
import { BareFetcher } from 'swr/_internal';

const useProductService = () => {
  // eslint-disable-next-line max-len
  const getCategories: BareFetcher<Category[]> = (url: string) => api.get<any, GetCategoriesResponse>(
    url,
  ).then(
    (response: GetCategoriesResponse) => response.categories,
  );

  const getProducts: BareFetcher<Product[]> = (categoryId: string) => {
    let params: GetProductsRequestParams = {};
    if (categoryId) {
      params = {
        categoryId,
      };
    }

    return api.get<any, GetProductsResponse>(GET_PRODUCTS, { params }).then(
      (response: GetProductsResponse) => response.products,
    );
  };

  return {
    getCategories, getProducts,
  };
};

export default useProductService;
