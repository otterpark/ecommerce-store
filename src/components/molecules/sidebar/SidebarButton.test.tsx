import { render, screen } from '@/utils/tests/renderWithTheme';

import Button from '@/components/atoms/buttons/Button';
import SidebarButton from './SidebarButton';

describe('SidebarButton', () => {
  const renderSidebarButton = () => render(
    <SidebarButton>
      <Button type="button" isPrimary>주문하기</Button>
    </SidebarButton>,
  );

  it('render SidebarButton', () => {
    renderSidebarButton();

    expect(screen.getByRole('button', { name: '주문하기' }));
  });
});
