import Link from 'next/link';
import styled from 'styled-components';
import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';

import { BaseBoxPadding } from '@/styles/commonStyle';

const TopBarWrap = styled.div`
  ${BaseBoxPadding}
  background-color: #e0e0e0;
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
  return (
    // TODO: 링크 수정
    <TopBarWrap>
      <MaxWidthWrap>
        <TopBarUl>
          <li>
            <Link href="/">로그인</Link>
          </li>
          <li>
            <Link href="/">회원가입</Link>
          </li>
        </TopBarUl>
      </MaxWidthWrap>
    </TopBarWrap>
  );
}
