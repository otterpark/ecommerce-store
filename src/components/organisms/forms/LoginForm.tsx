import {
  FormEvent, useMemo, useState, useCallback,
} from 'react';
import Link from 'next/link';

import Button from '@/components/atoms/buttons/Button';
import PageTitle from '@/components/atoms/texts/PageTitle';
import InputText from '@/components/molecules/inputs/InputText';
import LoadingSpinner from '@/components/atoms/Loading';

import { space } from '@/styles/sizes';
import defaultTheme from '@/styles/defaultTheme';
import { LoginRequest } from '@/api/types/user';
import { useRouter } from 'next/router';

import useAlert from '@/hooks/useAlert';

import { ERROR_MESSAGE } from '@/constants';
import useUserService from '@/services/userService';
import { ButtonWrap, InputWrap } from '@/styles/commonStyle';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { showAlert } = useAlert();
  const { login, getUser } = useUserService();

  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (isLoading) return;
    setIsLoading(true);

    const requestBody: LoginRequest = {
      email, password,
    };

    login(
      requestBody,
      () => {
        getUser(
          () => {
            setIsLoading(false);
            router.push('/');
          },
          () => {
            showAlert(ERROR_MESSAGE.USER.INVALED_TOKEN);
            setIsLoading(false);
          },
        );
      },
      () => {
        showAlert(ERROR_MESSAGE.USER.INVALED_USER);
        setIsLoading(false);
      },
    );
  };

  const isValidCheck = useMemo(() => {
    if (email.length === 0 || password.length === 0) return false;
    return emailRegEx.test(email);
  }, [email, password]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isValidCheck) return;
    const { keyCode } = event;
    if (keyCode === 13) {
      handleSubmit(event);
    }
  }, [email, password]);

  return (
    <form name="loginForm" onSubmit={handleSubmit}>
      <PageTitle title="로그인" mb={space.m} />
      <InputWrap>
        <InputText
          type="email"
          label="이메일"
          onChange={handleChangeEmail}
          placeholder="이메일을 입력해 주세요."
        />
        <InputText
          type="password"
          label="비밀번호"
          onChange={handleChangePassword}
          onKeyDown={handleKeyDown}
          placeholder="비밀번호를 입력해 주세요."
        />
      </InputWrap>
      <ButtonWrap>
        <Button
          isPrimary
          type="submit"
          isDisabled={!isValidCheck}
        >
          {(isLoading) ? <LoadingSpinner color={defaultTheme.colors.white} /> : '로그인'}
        </Button>
        <Link href="/signup">
          <Button>
            회원가입
          </Button>
        </Link>
      </ButtonWrap>
    </form>
  );
}
