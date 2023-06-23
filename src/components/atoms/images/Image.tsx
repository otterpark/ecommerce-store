import React from 'react';
import styled from 'styled-components';

type ImageProps = {
  width: number,
  height?: number | 'auto';
} & React.ImgHTMLAttributes<HTMLImageElement>

type StyledImageProps = Pick<ImageProps, 'width' | 'height'>;

const StyledImage = styled.img<StyledImageProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export default function Image({
  width,
  height = 'auto',
  ...props
}: ImageProps) {
  return (
    <StyledImage
      width={width}
      height={height}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}
