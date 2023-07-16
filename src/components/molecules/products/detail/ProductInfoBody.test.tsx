import { render, screen, waitFor } from '@/utils/tests/renderWithTheme';

import { mockProductDetail } from '@/fixtures/__mocks__/api/product';

import ProductInfoBody from './ProductInfoBody';

describe('ProductInfoBody', () => {
  const mockProduct = mockProductDetail;

  const renderProductInfoBody = () => render(
    <ProductInfoBody
      name={mockProduct.name}
      price={mockProduct.price}
      description={mockProduct.description}
    />,
  );

  it('render ProductOptions', async () => {
    renderProductInfoBody();

    await waitFor(() => {
      expect(screen.getByText(/CBCL 사틴셔츠/));
      expect(screen.getByText(/118,000 원/));
      expect(screen.getByText(/한층 우아한 분위기 연출/));
    });
  });
});
