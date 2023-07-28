/* eslint-disable no-unused-expressions */
import { api } from '@/api/call';
import {
  GetCategoriesResponse, GetProductResponse, GetProductsRequestParams, GetProductsResponse,
} from '@/api/types/product';
import { GET_PRODUCT_LIST } from '@/api/url';
import { Category, Product, ProductDetail } from '@/types/product';
import { BareFetcher } from 'swr/_internal';

const useProductService = () => {
  // eslint-disable-next-line max-len
  const getCategories: BareFetcher<Category[]> = (url: string) => api.get<any, GetCategoriesResponse>(
    url,
  ).then(
    (response: GetCategoriesResponse) => response.categories,
  );

  const getProductList: BareFetcher<Product[]> = (categoryId: string) => {
    let params: GetProductsRequestParams = {};
    if (categoryId) {
      params = {
        categoryId,
      };
    }

    return api.get<any, GetProductsResponse>(GET_PRODUCT_LIST, { params }).then(
      (response: GetProductsResponse) => response.products,
    );
  };

  const getProduct: BareFetcher<ProductDetail> = (url: string) => api.get<any, GetProductResponse>(
    url,
  ).then(
    (response: GetProductResponse) => response,
  );

  return {
    getCategories, getProductList, getProduct,
  };
};

export default useProductService;
