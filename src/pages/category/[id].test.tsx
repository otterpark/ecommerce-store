import { render, screen, waitFor } from '@/utils/tests/renderWithSWR';

// eslint-disable-next-line import/no-extraneous-dependencies
import mockRouter from 'next-router-mock';

import server from '@/mocks/server';
import { getProductList } from '@/mocks/handlers/product';

import CategoryPage from './[id].page';

const context = describe;

describe('CategoryPage ', () => {
  mockRouter.push('/category/0BV000CAT0001');
  const renderCategorypage = () => render(<CategoryPage />);

  context('when render CategoryPage', () => {
    it('can see all categories products', async () => {
      renderCategorypage();

      await waitFor(() => {
        expect(screen.getByText(/하트자수맨투맨/)).toBeInTheDocument();
        expect(screen.getByText(/사틴셔츠/)).toBeInTheDocument();
        expect(screen.getByText(/레이어드 탑/)).toBeInTheDocument();
      });
    });
  });

  context('when there has no category for product', () => {
    it('show error message', async () => {
      server.use(getProductList('Error'));
      renderCategorypage();

      await waitFor(() => {
        expect(screen.getByText(/해당 카테고리를 찾을 수 없습니다/)).toBeInTheDocument();
      });
    });
  });
});
