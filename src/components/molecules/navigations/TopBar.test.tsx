import { render, screen } from '@/utils/tests/renderWithProvider';

import { Auth } from '@/features';

import { mockUserAccessToken, mockUserInfo } from '@/fixtures/__mocks__/api';
import TopBar from './TopBar';

jest.unmock('react-redux');

describe('TopBar', () => {
  function renderTopBar(auth?: Auth) {
    // eslint-disable-next-line no-unused-expressions
    (!auth) ? render(<TopBar />) : render(
      <TopBar />,
      {
        preloadedState: {
          auth: {
            ...auth,
          },
        },
      },
    );
  }
  it('render topbar without auth topbar', () => {
    renderTopBar();

    expect(screen.getByText(/로그인/)).toBeInTheDocument();
    expect(screen.getByText(/회원가입/)).toBeInTheDocument();
  });

  it('render topbar auth topbar', () => {
    const preloadAuthState: Auth = {
      isAuthenticated: true,
      accessToken: mockUserAccessToken.accessToken,
      userInfo: mockUserInfo,
    };
    renderTopBar(preloadAuthState);

    expect(screen.getByText(/환영합니다./)).toBeInTheDocument();
    expect(screen.getByText(/로그아웃/)).toBeInTheDocument();
  });
});
