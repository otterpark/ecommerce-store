import { render, screen } from '@/utils/tests/renderWithTheme';

import ProductInfoButtons from './ProductInfoButtons';

describe('ProductInfoButtons ', () => {
  const renderProductInfoButtons = () => {
    render(<ProductInfoButtons />);
  };

  it('render ProductSelectBox', () => {
    renderProductInfoButtons();

    expect(screen.getByAltText(/shopping-cart-icon/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
  });
});
