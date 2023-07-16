import { render, screen, waitFor } from '@/utils/tests/renderWithSWR';

import server from '@/mocks/server';
import { getProducts } from '@/mocks/handlers/product';

import HomePage from './index.page';

const context = describe;

describe('HomePage ', () => {
  const renderHomepage = () => render(<HomePage />);

  context('when render Hompage', () => {
    it('can see all categories products', async () => {
      renderHomepage();

      await waitFor(() => {
        expect(screen.getByText(/하트자수맨투맨/)).toBeInTheDocument();
        expect(screen.getByText(/박시롱코트/)).toBeInTheDocument();
        expect(screen.getByText(/하트자수셋업조거/)).toBeInTheDocument();
        expect(screen.getByText(/EARRING Purple/)).toBeInTheDocument();
      });
    });
  });

  context('when there has no category for product', () => {
    it('show error message', async () => {
      server.use(getProducts('Error'));
      renderHomepage();

      await waitFor(() => {
        expect(screen.getByText(/해당 카테고리를 찾을 수 없습니다/)).toBeInTheDocument();
      });
    });
  });
});
