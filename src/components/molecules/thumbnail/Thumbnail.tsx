import { HTMLAttributes } from 'react';

import Image from '@/components/atoms/images/Image';

type ThumbnailProps = {
  imageUrl: string;
  name: string;
} & HTMLAttributes<HTMLDivElement>

export default function Thumbnail({
  imageUrl, name, ...props
}: ThumbnailProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...props}>
      <Image src={imageUrl} alt={name} />
    </div>
  );
}
