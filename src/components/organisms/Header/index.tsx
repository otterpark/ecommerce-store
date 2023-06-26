import styled from 'styled-components';

import TopBar from '@/components/molecules/navigations/TopBar';
import MainBar from '@/components/molecules/navigations/MainBar';

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
