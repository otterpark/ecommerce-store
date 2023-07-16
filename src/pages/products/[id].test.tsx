/* eslint-disable import/no-extraneous-dependencies */
import { render, screen, waitFor } from '@/utils/tests/renderWithSWR';

import mockRouter from 'next-router-mock';

import ProductsDetailPage from './[id]';

const context = describe;

describe('ProductsDetailpage ', () => {
  mockRouter.push('/products/0BV000PRO0002');

  const renderProductsDetailpage = () => render(<ProductsDetailPage />);

  context('when render ProductPage', () => {
    it('can see product detail', async () => {
      renderProductsDetailpage();

      await waitFor(() => {
        expect(screen.getByAltText(/CBCL 사틴셔츠/)).toBeInTheDocument();
        expect(screen.getByText(/CBCL 사틴셔츠/)).toBeInTheDocument();
        expect(screen.getByText(/화이트 실크 소재의 살랑거리는 블라우스/)).toBeInTheDocument();

        expect(screen.getByText(/컬러/)).toBeInTheDocument();
        expect(screen.getByText(/사이즈/)).toBeInTheDocument();
        expect(screen.getByText(/상품 수량/)).toBeInTheDocument();
        expect(screen.getByText(/총 상품금액/)).toBeInTheDocument();

        expect(screen.getByAltText(/shopping-cart/)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
      });
    });
  });
});
