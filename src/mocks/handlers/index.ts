import user from './user';
import product from './product';
import cart from './cart';

const handlers = [
  ...Object.values(user),
  ...Object.values(product),
  ...Object.values(cart),
];

export default handlers;
