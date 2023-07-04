/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';

import server from './mocks/server';

// custom mocks
import './fixtures/__mocks__/jest/nextRouter';
import './fixtures/__mocks__/jest/reactRedux';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
