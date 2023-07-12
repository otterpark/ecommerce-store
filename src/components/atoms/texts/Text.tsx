import React from 'react';

import styled, { css } from 'styled-components';

import { FontSize, Space } from '@/types/size';
import { ColorTheme } from '@/types/color';

import { space, fontSize } from '@/styles/sizes';

type TextProps = {
  textSize: keyof FontSize;
  textWeight?: 'normal' | 'bold';
  textAlign: 'left' | 'center' | 'right';
  text: string;
  color: keyof ColorTheme;
  mb?: keyof Space | '';
  pb?: keyof Space | '';
} & React.ImgHTMLAttributes<HTMLImageElement>

type StyledTextProps = Pick<TextProps, 'textSize' | 'textWeight' | 'mb' | 'pb' | 'textAlign' | 'color'>;

const StyledText = styled.p<StyledTextProps>`
  font-size: ${(props) => fontSize[props.textSize]};
  font-weight: ${(props) => props.textWeight};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.theme.colors[props.color]};
  ${(props) => props.mb && css`
    margin-bottom: ${space[props.mb]};
  `}
  ${(props) => props.pb && css`
    padding-bottom: ${space[props.pb]};
  `}
  line-height: 1.3;
  word-break: keep-all;
  white-space: pre-line;
`;

export default function Text({
  textSize,
  textWeight = 'normal',
  color = 'black',
  textAlign = 'left',
  mb = '',
  pb = '',
  text,
  ...props
}: TextProps) {
  return (
    <StyledText
      textSize={textSize}
      textWeight={textWeight}
      color={color}
      textAlign={textAlign}
      mb={mb}
      pb={pb}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {text}
    </StyledText>
  );
}
