// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import {
  LOGIN, LOGOUT, SIGNUP, USER_INFO,
} from '@/api/url';

import { mockUserAccessToken, mockUserInfo } from '@/fixtures/__mocks__/api';

export const login = (type?: 'Error') => rest.post(LOGIN, (req, res, ctx) => {
  if (type) {
    return res(
      ctx.delay(),
      ctx.status(400),
    );
  }

  return res(
    ctx.delay(),
    ctx.status(201),
    ctx.json(mockUserAccessToken),
  );
});

export const logout = () => rest.post(LOGOUT, (req, res, ctx) => res(
  ctx.delay(),
  ctx.status(200),
));

export const signup = (type?: 'Error') => rest.post(SIGNUP, (req, res, ctx) => {
  if (type) {
    return res(
      ctx.delay(),
      ctx.status(400),
    );
  }

  return res(
    ctx.delay(),
    ctx.status(201),
    ctx.json(mockUserAccessToken),
  );
});

export const getUserInfo = (type?: 'Error') => rest.get(USER_INFO, (req, res, ctx) => {
  if (type) {
    return res(ctx.status(403));
  }

  return res(
    ctx.delay(),
    ctx.status(200),
    ctx.json(mockUserInfo),
  );
});

export default [login(), logout(), signup(), getUserInfo()];
