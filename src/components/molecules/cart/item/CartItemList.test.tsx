import { render, screen } from '@/utils/tests/renderWithTheme';

import { mockCart } from '@/fixtures/__mocks__/api';
import CartItemList from './CartItemList';

describe('CartItemList', () => {
  const { lineItems } = mockCart;

  const renderCartItemList = () => render(
    <CartItemList lineItems={lineItems} />,
  );

  it('render CartItemList', () => {
    renderCartItemList();

    expect(screen.getByText(/CBCL 사틴셔츠/)).toBeInTheDocument();
    expect(screen.getByText(/CBCL 레귤러핏 야구점퍼/)).toBeInTheDocument();

    expect(screen.getByText(/컬러: white/)).toBeInTheDocument();
    expect(screen.getByText(/컬러: brown/)).toBeInTheDocument();

    expect(screen.getByText(/사이즈: S/)).toBeInTheDocument();
    expect(screen.getByText(/사이즈: M/)).toBeInTheDocument();

    expect(screen.getByText('(4)')).toBeInTheDocument();
    expect(screen.getByText('(5)')).toBeInTheDocument();

    expect(screen.getByText(/590,000 원/)).toBeInTheDocument();
    expect(screen.getByText(/1,588,000 원/)).toBeInTheDocument();
  });
});
