import { css } from 'styled-components';
import defaultTheme from './defaultTheme';

// eslint-disable-next-line import/prefer-default-export
export const BaseBoxPadding = css`
  padding: ${defaultTheme.interval.content.paddingHorizontal} ${defaultTheme.interval.content.paddingVertical};
`;
