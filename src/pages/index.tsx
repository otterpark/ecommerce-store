import styled from 'styled-components';
import Header from '@/components/organisms/Header';
import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import defaultTheme from '@/styles/defaultTheme';

const HomeContainer = styled.div``;

const HomeWrap = styled.div`
  padding: ${(props) => `${props.theme.interval.page.paddingHorizontal} 0 ${props.theme.interval.page.paddingVertical}`};
`;

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeWrap>
        <MaxWidthWrap
          maxWidth={defaultTheme.maxWidth.full}
        >
          Hello World!
        </MaxWidthWrap>
      </HomeWrap>
    </HomeContainer>
  );
}
