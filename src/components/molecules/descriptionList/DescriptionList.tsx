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
  isMobileHidedt?: boolean;
}

type StyledDescriptionListProps = Pick<DescriptionListProps, 'isSpaceBetween' | 'isBorder' | 'isTextBold' | 'padding' | 'isMobileHidedt'>

const StyledDescriptionList = styled.dl<StyledDescriptionListProps>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: ${(props) => props.padding};
  ${(props) => props.isBorder && css`
    border-top: 1px solid ${props.theme.colors.border};
  `};

  dt {
    width: 110px;
    height: 100%;
    font-size: ${fontSize.s};
    ${(props) => props.isMobileHidedt && css`
      ${breakpoints.tablet} {
        display: none;
      }
    `};
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
    padding: ${space.xs} ${space.xs};
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
  isMobileHidedt = false,
  padding = `${space.s} ${space.xs}`,
}: DescriptionListProps) {
  return (
    <StyledDescriptionList
      isSpaceBetween={isSpaceBetween}
      isBorder={isBorder}
      isTextBold={isTextBold}
      isMobileHidedt={isMobileHidedt}
      padding={padding}
    >
      <dt>{listTitle}</dt>
      <dd>
        {children}
      </dd>
    </StyledDescriptionList>
  );
}
