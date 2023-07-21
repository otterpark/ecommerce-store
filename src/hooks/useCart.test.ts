import { mockCart } from '@/fixtures/__mocks__/api';
import { mockUseDispatch } from '@/fixtures/__mocks__/jest/reactRedux';
import useCart from './useCart';

const context = describe;

describe('useCart', () => {
  beforeEach(() => {
    mockUseDispatch.mockClear();
  });

  context('when hook method', () => {
    it('use setCart method', () => {
      const { updateCart } = useCart();
      updateCart(mockCart);

      expect(mockUseDispatch).toBeCalledTimes(1);
    });

    it('use clearCart method', () => {
      const { resetCart } = useCart();
      resetCart();

      expect(mockUseDispatch).toBeCalledTimes(1);
    });
  });
});
