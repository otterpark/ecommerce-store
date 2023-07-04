import styled, { css } from 'styled-components';
import { interval, space } from './sizes';

export const BaseBoxPadding = css`
  padding: ${interval.content.paddingHorizontal} ${interval.content.paddingVertical};
`;

export const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = css`
  display: flex;
  flex-direction: row;
`;

export const InputWrap = styled.div`
  ${FlexColumn}
  gap: ${space.xs};
  margin-bottom: ${space.m};
`;

export const ButtonWrap = styled.div`
  ${FlexColumn}
  gap: ${space.xs};
`;
