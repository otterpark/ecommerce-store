import { Categories, Products } from '@/types/product';

export type GetCategoriesResponse = Categories;

export type GetProductsRequestParams = {
  categoryId?: string;
}

export type GetProductsResponse = Products;
