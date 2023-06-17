// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

// Test
const getTests = rest.get('/test', (req, res, ctx) => res(
  ctx.status(200),
  ctx.json({
    text: 'test ok',
  }),
));

export default getTests;
