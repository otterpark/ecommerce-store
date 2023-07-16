import { ReactNode } from 'react';
import styled from 'styled-components';

import { fontSize, space } from '@/styles/sizes';
import { breakpoints } from '@/styles/medias';

const StyledDescriptionList = styled.dl`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: ${space.s} ${space.xs};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  dt {
    width: 110px;
    height: 100%;
    font-size: ${fontSize.s};
  }
  dd {
    flex: 1;
  }
  :last-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    margin-bottom: ${space.m};
  }

  ${breakpoints.tablet} {
    padding: ${space.s} ${space.s};
    :first-child {
      border-top: 0;
    }
    :last-child {
      margin-bottom: ${space.s};
    }
  }
`;

type DescriptionListProps = {
  children: ReactNode;
  listTitle: string;
}

export default function DescriptionList({ children, listTitle }: DescriptionListProps) {
  return (
    <StyledDescriptionList>
      <dt>{listTitle}</dt>
      <dd>
        {children}
      </dd>
    </StyledDescriptionList>
  );
}
