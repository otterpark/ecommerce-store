import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { fontSize, space } from '@/styles/sizes';
import { breakpoints } from '@/styles/medias';

type DescriptionListProps = {
  children: ReactNode;
  listTitle: string;
  padding?: string;
  isTextBold?: boolean;
  isSpaceBetween?: boolean;
  isBorder?: boolean;
}

type StyledDescriptionListProps = Pick<DescriptionListProps, 'isSpaceBetween' | 'isBorder' | 'isTextBold' | 'padding'>

const StyledDescriptionList = styled.dl<StyledDescriptionListProps>`
  display: flex;
  display:inline-flex;
  flex-direction: row;
  width: 100%;
  padding: ${(props) => props.padding};
  ${(props) => props.isBorder && css`
    border-top: 1px solid ${props.theme.colors.border};
  `};

  dt {
    width: 110px;
    height: 100%;
    font-size: ${fontSize.s};
  }
  dd {
    flex: 1;
    ${(props) => props.isSpaceBetween && css`
      text-align: right;
    `}
    ${(props) => props.isTextBold && css`
      font-weight: bold;
    `}
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

export default function DescriptionList({
  children,
  listTitle,
  isBorder = true,
  isSpaceBetween = false,
  isTextBold = false,
  padding = `${space.s} ${space.xs}`,
}: DescriptionListProps) {
  return (
    <StyledDescriptionList
      isSpaceBetween={isSpaceBetween}
      isBorder={isBorder}
      isTextBold={isTextBold}
      padding={padding}
    >
      <dt>{listTitle}</dt>
      <dd>
        {children}
      </dd>
    </StyledDescriptionList>
  );
}
