import { render, screen, waitFor } from '@/utils/tests/renderWithSWR';

import server from '@/mocks/server';
import { getProducts } from '@/mocks/handlers/product';

import CategoryPage from './[id]';

const context = describe;

describe('CategoryPage ', () => {
  const renderHomepage = () => render(<CategoryPage />);

  context('when render CategoryPage', () => {
    it('can see all categories products', async () => {
      server.use(getProducts('HasCategory'));
      renderHomepage();

      await waitFor(() => {
        expect(screen.getByText(/하트자수맨투맨/)).toBeInTheDocument();
        expect(screen.getByText(/사틴셔츠/)).toBeInTheDocument();
        expect(screen.getByText(/레이어드 탑/)).toBeInTheDocument();
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
