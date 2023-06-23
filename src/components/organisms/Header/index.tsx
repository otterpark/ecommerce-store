import styled from 'styled-components';

import TopBar from '@/components/molecules/Navigation/Header/TopBar';
import MainBar from '@/components/molecules/Navigation/Header/MainBar';

const Container = styled.header`
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export default function Header() {
  return (
    <Container>
      <TopBar />
      <MainBar />
    </Container>
  );
}
