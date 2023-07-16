import { mockProductDetail } from '@/fixtures/__mocks__/api/product';

import { render, screen } from '@/utils/tests/renderWithTheme';

import Thumbnail from './Thumbnail';

describe('Thumbnail ', () => {
  const mockProduct = mockProductDetail;

  const renderThumbnail = () => {
    render(<Thumbnail imageUrl={mockProduct.images[0].url} name={mockProduct.name} />);
  };

  it('render Thumbnail', () => {
    renderThumbnail();

    expect(screen.getByAltText(mockProduct.name)).toBeInTheDocument();
  });
});
