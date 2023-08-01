import user from './user';
import product from './product';
import cart from './cart';
import order from './order';

const handlers = [
  ...Object.values(user),
  ...Object.values(product),
  ...Object.values(cart),
  ...Object.values(order),
];

export default handlers;
