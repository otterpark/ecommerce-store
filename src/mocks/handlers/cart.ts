// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { mockCart } from '@/fixtures/__mocks__/api';

import { ADD_CART, GET_CART } from '@/api/url';

export const addCart = (type?: 'Error') => rest.post(ADD_CART, (req, res, ctx) => {
  if (type) {
    return res(
      ctx.delay(),
      ctx.status(400),
    );
  }

  return res(
    ctx.delay(),
    ctx.status(201),
  );
});

export const getCart = (type?: 'Error') => rest.get(GET_CART, (req, res, ctx) => {
  if (type) {
    return res(
      ctx.delay(),
      ctx.status(400),
    );
  }

  return res(
    ctx.delay(),
    ctx.status(201),
    ctx.json(mockCart),
  );
});

export default [addCart(), getCart()];
