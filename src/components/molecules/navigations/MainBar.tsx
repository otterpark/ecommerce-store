import styled from 'styled-components';

import Logo from '@/components/atoms/Logo';
import Nav from '@/components/atoms/Nav';
import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';

import { breakpoints } from '@/styles/medias';
import { maxWidth, space } from '@/styles/sizes';

const MainBarWrap = styled.div`
  padding: ${space.xs} ${space.s};
`;

const MainBarDiv = styled.div`
  display: flex;
  align-items: center;

  ${breakpoints.tablet} {
    justify-content: space-between;
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
