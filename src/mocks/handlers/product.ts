// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { mockCategories, mockProductDetail, mockProducts } from '@/fixtures/__mocks__/api/product';

import { GET_CATEGORIES, GET_PRODUCT_LIST, GET_PRODUCT } from '@/api/url';

export const getCategories = (type?: 'Error') => rest.get(GET_CATEGORIES, (req, res, ctx) => {
  if (type) {
    return res(
      ctx.delay(),
      ctx.status(400),
    );
  }

  return res(
    ctx.delay(),
    ctx.status(201),
    ctx.json(mockCategories),
  );
});

export const getProductList = (type?: 'Error'| 'HasCategory') => rest.get(GET_PRODUCT_LIST, (req, res, ctx) => {
  if (type === 'Error') {
    return res(
      ctx.delay(),
      ctx.status(400),
    );
  }

  if (type === 'HasCategory') {
    mockProducts.products = mockProducts.products.filter((product) => product.category.id === '0BV000CAT0001');
    return res(
      ctx.delay(),
      ctx.status(201),
      ctx.json(mockProducts),
    );
  }

  return res(
    ctx.delay(),
    ctx.status(201),
    ctx.json(mockProducts),
  );
});

export const getProduct = (type?: 'Error'| 'HasCategory') => rest.get(`${GET_PRODUCT}/:productId`, (req, res, ctx) => {
  if (type === 'Error') {
    return res(
      ctx.delay(),
      ctx.status(400),
    );
  }

  return res(
    ctx.delay(),
    ctx.status(201),
    ctx.json(mockProductDetail),
  );
});

export default [getCategories(), getProductList(), getProduct()];
