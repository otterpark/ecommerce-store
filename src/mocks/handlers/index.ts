import user from './user';
import product from './product';

const handlers = [
  ...Object.values(user),
  ...Object.values(product),
];

export default handlers;
