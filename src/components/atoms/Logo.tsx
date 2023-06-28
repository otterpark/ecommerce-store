import styled from 'styled-components';
import Link from 'next/link';

import { fontSize, space } from '@/styles/sizes';
import Image from './images/Image';

const LogoWrap = styled.div`
`;

const LogoName = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${space.xs};
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  span {
    font-size: ${fontSize.default};
    font-weight: 600;
  }
`;

export default function Logo() {
  return (
    <LogoWrap>
      <LogoName href="/">
        <Image
          width={32}
          alt="logo"
          src="/assets/logo.png"
        />
        <span>헬로우마켓</span>
      </LogoName>
    </LogoWrap>
  );
}
