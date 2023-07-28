import { Categories, ProductDetail, ProductList } from '@/types/product';

export type GetCategoriesResponse = Categories;

export type GetProductsRequestParams = {
  categoryId?: string;
}

export type GetProductsResponse = ProductList;

export type GetProductResponse = ProductDetail;
