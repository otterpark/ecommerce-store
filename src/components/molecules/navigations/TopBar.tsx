import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import styled from 'styled-components';

import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';

import { maxWidth, space } from '@/styles/sizes';

import useUserService from '@/services/userService';

import useAuth from '@/hooks/useAuth';

const TopBarWrap = styled.div`
  padding: ${space.xs} ${space.s};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

const TopBarUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  font-size: 1.3rem;
  li {
    text-decoration: none;
    padding: 0 .6rem;
    :last-child {
      padding-right: 0;
    }
    a {
      text-decoration: none;
    }
  }
`;
export default function TopBar() {
  const router = useRouter();

  const { auth } = useAuth();

  const { logout } = useUserService();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    logout();
    router.push('/');
  };

  return (
    <TopBarWrap>
      <MaxWidthWrap
        maxWidth={maxWidth.full}
      >
        <TopBarUl>
          {(!auth.isAuthenticated)
            ? (
              <>
                <li>
                  <Link href="/login">로그인</Link>
                </li>
                <li>
                  <Link href="/signup">회원가입</Link>
                </li>
              </>
            )
            : (
              <>
                <li>
                  {auth.userInfo.name}
                  님 환영합니다.
                </li>
                <li>
                  <a href="#none" onClick={handleClick}>로그아웃</a>
                </li>
              </>
            )}
        </TopBarUl>
      </MaxWidthWrap>
    </TopBarWrap>
  );
}
