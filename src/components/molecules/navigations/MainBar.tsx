import styled from 'styled-components';

import Logo from '@/components/atoms/Logo';
import Nav from '@/components/atoms/Nav';
import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';

import { BaseBoxPadding } from '@/styles/commonStyle';
import { breakpoints } from '@/styles/medias';
import { maxWidth } from '@/styles/sizes';

const MainBarWrap = styled.div`
  ${BaseBoxPadding}
`;

const MainBarDiv = styled.div`
  display: flex;

  ${breakpoints.tablet} {
    justify-content: space-between;
    align-items: center;
  }
`;

export default function MainBar() {
  return (
    <MainBarWrap>
      <MaxWidthWrap
        maxWidth={maxWidth.full}
      >
        <MainBarDiv>
          <Logo />
          <Nav />
        </MainBarDiv>
      </MaxWidthWrap>
    </MainBarWrap>
  );
}
