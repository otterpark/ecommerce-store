import { render, screen, waitFor } from '@/utils/tests/renderWithTheme';

import { mockProductDetail } from '@/fixtures/__mocks__/api/product';

import ProductTotalPrice from './ProductTotalPrice';

describe('ProductTotalPrice', () => {
  const mockProduct = mockProductDetail;

  const renderProductTotalPrice = () => render(
    <ProductTotalPrice price={mockProduct.price} quantity={1} />,
  );

  it('render ProductTotalPrice', async () => {
    renderProductTotalPrice();

    await waitFor(() => {
      expect(screen.getByText(/총 상품금액/));
      expect(screen.getByText(/118,000 원/));
    });
  });
});
