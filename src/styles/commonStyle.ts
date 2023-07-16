import styled, { css } from 'styled-components';
import { space } from './sizes';

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
