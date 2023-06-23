import styled from 'styled-components';
import Image from './images/Image';

const LogoWrap = styled.div`
  width: 50px;
`;

export default function Logo() {
  return (
    <LogoWrap>
      <Image
        width={32}
        alt="logo"
        src="/assets/logo.png"
      />
    </LogoWrap>
  );
}
