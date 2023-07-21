import Text from '@/components/atoms/texts/Text';

type ErrorMessageProps = {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <Text
      textSize="default"
      textAlign="center"
      text={message}
      color="text"
      mb="xs"
    />
  );
}
