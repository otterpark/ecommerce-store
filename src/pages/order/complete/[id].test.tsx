import {
  render, screen, waitFor,
} from '@/utils/tests/renderWithRedux';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';

import { SWRConfig } from 'swr';
import { Auth } from '@/features';
import { mockUserAccessToken, mockUserInfo } from '@/fixtures/__mocks__/api';
import OrderCompletePage from './[id].page';

jest.unmock('react-redux');

const context = describe;

describe('OrderCompletePage ', () => {
  mockRouter.push('/order/complete/01H6JABMXXAFZ7XYCCWAJE489C');
  const preloadAuthState: Auth = {
    isAuthenticated: true,
    accessToken: mockUserAccessToken.accessToken,
    userInfo: mockUserInfo,
  };

  const renderOrderCompletePage = () => {
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <OrderCompletePage id="01H6JABMXXAFZ7XYCCWAJE489C" />
      </SWRConfig>,
      {
        preloadedState: {
          auth: {
            ...preloadAuthState,
          },
        },
      },
    );
  };

  context('when render OrderCompletePage', () => {
    it('can see order info', async () => {
      renderOrderCompletePage();

      await waitFor(() => {
        expect(screen.getByText(/결제가 완료되었습니다/)).toBeInTheDocument();

        expect(screen.getByText(/맨투맨/)).toBeInTheDocument();
        expect(screen.getByText('컬러: black, 사이즈: M')).toBeInTheDocument();
        expect(screen.getByText(/2개/)).toBeInTheDocument();

        expect(screen.getByText(/결제 날짜/)).toBeInTheDocument();
        expect(screen.getByText(/2023-01-01 00:00/)).toBeInTheDocument();

        expect(screen.getByText(/결제 상태/)).toBeInTheDocument();
        expect(screen.getByText(/결제 완료/)).toBeInTheDocument();

        expect(screen.getByText(/총 결제 금액/)).toBeInTheDocument();
        expect(screen.getAllByText(/256,000 원/)).toHaveLength(2);

        expect(screen.getByRole('button', { name: /메인으로 이동하기/ })).toBeInTheDocument();
      });
    });
  });

  context('when button click "메인으로 이동하기"', () => {
    it('should call useRouter and move Mainpage', async () => {
      renderOrderCompletePage();

      await waitFor(async () => {
        const button = screen.getByRole('button', { name: /메인으로 이동하기/ });

        await userEvent.click(button);

        expect(mockRouter).toMatchObject({
          asPath: '/',
          pathname: '/',
          query: {},
        });
      });
    });
  });
});
