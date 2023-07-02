// eslint-disable-next-line import/no-extraneous-dependencies
import { SetupServer, setupServer } from 'msw/node';

import handlers from './handlers';

const server: SetupServer = setupServer(...handlers);

export default server;
