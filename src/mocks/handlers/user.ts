// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import { LOGIN, USER_INFO } from '@/api/url';

import { mockUserAccessToken, mockUserInfo } from '@/fixtures/__mocks__/api';

export const postLogin = (type?: 'Error') => rest.post(LOGIN, (req, res, ctx) => {
  if (type) {
    return res(ctx.status(400));
  }

  return res(
    ctx.status(201),
    ctx.json(mockUserAccessToken),
  );
});

export const getUserInfo = (type?: 'Error') => rest.get(USER_INFO, (req, res, ctx) => {
  if (type) {
    return res(ctx.status(403));
  }

  return res(
    ctx.status(200),
    ctx.json(mockUserInfo),
  );
});

export default [postLogin(), getUserInfo()];
