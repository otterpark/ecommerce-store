// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { mockCategories, mockProducts } from '@/fixtures/__mocks__/api/product';

import { GET_CATEGORIES, GET_PRODUCTS } from '@/api/url';

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

export const getProducts = (type?: 'Error') => rest.get(GET_PRODUCTS, (req, res, ctx) => {
  if (type) {
    return res(
      ctx.delay(),
      ctx.status(400),
    );
  }

  return res(
    ctx.delay(),
    ctx.status(201),
    ctx.json(mockProducts),
  );
});

export default [getCategories(), getProducts()];
