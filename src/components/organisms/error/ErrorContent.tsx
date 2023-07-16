import Button from '@/components/atoms/buttons/Button';
import Image from '@/components/atoms/images/Image';
import Text from '@/components/atoms/texts/Text';
import { useRouter } from 'next/router';
import styled from 'styled-components';

type ErrorContentProps = {
  imageWidth: number;
  imageAlt: string;
  imageSrc: string;
  errorText: string;
}

const ErrorMessageContainer = styled.div`
  text-align: center;
`;

export default function ErrorContent({
  imageWidth, imageAlt, imageSrc, errorText,
}: ErrorContentProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <ErrorMessageContainer>
      <Image
        width={imageWidth}
        mb="s"
        alt={imageAlt}
        src={imageSrc}
      />
      <Text
        textSize="default"
        textAlign="center"
        text={errorText}
        color="black"
        mb="m"
      />
      <Button
        type="button"
        isPrimary
        onClick={handleClick}
      >
        메인으로 돌아가기
      </Button>
    </ErrorMessageContainer>
  );
}
