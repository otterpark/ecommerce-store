/* eslint-disable import/no-extraneous-dependencies */
import mockRouter from 'next-router-mock';
import * as nextRouterMock from 'next-router-mock';

import { createDynamicRouteParser } from 'next-router-mock/dynamic-routes';

jest.mock('next/router', () => nextRouterMock);

// jest.mock('next/router', () => ({
//   useRouter() {
//     return ({
//       route: '/',
//       pathname: '',
//       query: '',
//       asPath: '',
//       push: mockPush,
//       events: {
//         on: jest.fn(),
//         off: jest.fn(),
//       },
//       beforePopState: jest.fn(() => null),
//       prefetch: jest.fn(() => null),
//     });
//   },
// }));

mockRouter.useParser(createDynamicRouteParser([
  '/products/[id]',
]));
