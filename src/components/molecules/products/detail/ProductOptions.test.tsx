import { render, screen, waitFor } from '@/utils/tests/renderWithTheme';

import { mockProductDetail } from '@/fixtures/__mocks__/api/product';

import ProductOptions from './ProductOptions';

describe('ProductOptions', () => {
  const mockProduct = mockProductDetail;
  const handleOptionClick = jest.fn();

  const renderProductOptions = () => render(
    <ProductOptions
      data={mockProduct}
      index={0}
      handleOptionClick={handleOptionClick}
    />,
  );

  it('render ProductOptions', () => {
    renderProductOptions();

    expect(screen.getByText(/white/));
    expect(screen.getByText(/black/));
    expect(screen.getByText(/beige/));
  });
});
