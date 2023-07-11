import { renderHook, waitFor } from '@testing-library/react';

import { mockCategories } from '@/fixtures/__mocks__/api/product';

import useProduct from './useProduct';

const context = describe;

describe('useProduct', () => {
  context('when get menu data using by useProduct', () => {
    function useProductHook() {
      const { result } = renderHook(() => useProduct());
      return result;
    }

    it('get categories data', async () => {
      const product = useProductHook();

      await waitFor(() => {
        expect(product.current.categories.data).toEqual(mockCategories.categories);
      });
    });
  });
});
