// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { GET_ORDER, GET_ORDER_LIST, ORDER_CART } from '@/api/url';
import { mockOrder, mockOrderList } from '@/fixtures/__mocks__/api/order';

export const postOrderCart = (type?: 'Error') => rest.post(ORDER_CART, (req, res, ctx) => {
  if (type) {
    return res(
      ctx.delay(),
      ctx.status(400),
    );
  }

  return res(
    ctx.delay(),
    ctx.status(201),
    ctx.json({
      message: 'success',
    }),
  );
});

export const getOrderList = (type?: 'Error') => rest.get(GET_ORDER_LIST, (req, res, ctx) => {
  if (type) {
    return res(
      ctx.delay(),
      ctx.status(400),
    );
  }

  return res(
    ctx.delay(),
    ctx.status(201),
    ctx.json(mockOrderList),
  );
});

export const getOrder = (type?: 'Error') => rest.get(`${GET_ORDER}/:orderId`, (req, res, ctx) => {
  if (type) {
    return res(
      ctx.delay(),
      ctx.status(400),
    );
  }

  return res(
    ctx.delay(),
    ctx.status(201),
    ctx.json(mockOrder),
  );
});

export default [postOrderCart(), getOrderList(), getOrder()];
