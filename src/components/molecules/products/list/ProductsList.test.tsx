import { render, screen, waitFor } from '@/utils/tests/renderWithSWR';

import server from '@/mocks/server';

import { getProductList } from '@/mocks/handlers/product';
import ProductsList from './ProductsList';

const context = describe;

describe('ProductsList ', () => {
  const renderProductsList = (categoryId = '') => {
    const { rerender } = render(
      <ProductsList categoryId={categoryId} />,
    );
    return { rerender };
  };

  context('when category is not valid', () => {
    it('should get all category products', async () => {
      renderProductsList();

      await waitFor(() => {
        expect(screen.getByText(/하트자수맨투맨/)).toBeInTheDocument();
        expect(screen.getByText(/박시롱코트/)).toBeInTheDocument();
        expect(screen.getByText(/하트자수셋업조거/)).toBeInTheDocument();
        expect(screen.getByText(/EARRING Purple/)).toBeInTheDocument();
      });
    });
  });

  context('when category is valid', () => {
    it('category is "top" should get "top" products', async () => {
      server.use(getProductList('HasCategory'));
      renderProductsList();

      await waitFor(() => {
        expect(screen.getByText(/하트자수맨투맨/)).toBeInTheDocument();
        expect(screen.getByText(/사틴셔츠/)).toBeInTheDocument();
        expect(screen.getByText(/레이어드 탑/)).toBeInTheDocument();
      });
    });
  });

  context('when server error in products url', () => {
    it('show error message', async () => {
      server.use(getProductList('Error'));
      renderProductsList();
      await waitFor(() => {
        expect(screen.getByText(/해당 카테고리를 찾을 수 없습니다/)).toBeInTheDocument();
      });
    });
  });
});
