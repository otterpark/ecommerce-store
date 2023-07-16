import { breakpoints } from '@/styles/medias';
import { interval, space } from '@/styles/sizes';
import { ReactNode } from 'react';
import styled from 'styled-components';

type PageWrapProps = {
  children: ReactNode;
}

const PageWrapContainer = styled.div`
  padding: ${interval.page.paddingHorizontal} 0 ${interval.page.paddingVertical};
  ${breakpoints.largeDesktop} {
    padding: ${space.l} ${space.s} ${interval.page.paddingVertical};
  }
`;

export default function PageWrap({
  children,
}: PageWrapProps) {
  return (
    <PageWrapContainer>
      {children}
    </PageWrapContainer>
  );
}
