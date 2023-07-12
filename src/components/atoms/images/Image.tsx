import React from 'react';

import styled, { css } from 'styled-components';

import { space } from '@/styles/sizes';

import { Space } from '@/types/size';

type ImageProps = {
  width?: number | '100%',
  height?: number | 'auto';
  mb?: keyof Space | '';
} & React.ImgHTMLAttributes<HTMLImageElement>

type StyledImageProps = Pick<ImageProps, 'width' | 'height' | 'mb'>;

const StyledImage = styled.img<StyledImageProps>`
  width: ${(props) => ((props.width === '100%') ? props.width : `${props.width}px`)};
  height: ${(props) => ((props.height === 'auto') ? props.height : `${props.height}px`)};
  ${(props) => props.mb && css`
    margin-bottom: ${space[props.mb]};
  `}
`;

export default function Image({
  width = '100%',
  height = 'auto',
  mb = '',
  ...props
}: ImageProps) {
  return (
    <StyledImage
      width={width}
      height={height}
      mb={mb}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}
