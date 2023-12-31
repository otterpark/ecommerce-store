import styled from 'styled-components';

import Logo from '@/components/atoms/Logo';
import FooterInfo from '@/components/atoms/FooterInfo';
import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';

import { maxWidth, space } from '@/styles/sizes';

const Container = styled.footer`
  padding: ${space.m};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Footer() {
  return (
    <Container>
      <MaxWidthWrap maxWidth={maxWidth.full}>
        <FooterWrap>
          <Logo />
          <FooterInfo />
        </FooterWrap>
      </MaxWidthWrap>
    </Container>
  );
}
