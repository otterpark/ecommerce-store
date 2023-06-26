import { css } from 'styled-components';
import { interval } from './sizes';

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
