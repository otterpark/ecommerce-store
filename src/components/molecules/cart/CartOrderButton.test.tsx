import { render, screen } from '@/utils/tests/renderWithTheme';

import CartOrderButton from './CartOrderButton';

describe('CartOrderButton', () => {
  const renderCartOrderButton = () => render(
    <CartOrderButton />,
  );

  it('render CartOrderButton', () => {
    renderCartOrderButton();

    expect(screen.getByRole('button', { name: '주문하기' }));
  });
});
