import {
  FormEvent, useCallback, useMemo, useState,
} from 'react';
import { useRouter } from 'next/router';

import LoadingSpinner from '@/components/atoms/Loading';
import Button from '@/components/atoms/buttons/Button';
import PageTitle from '@/components/atoms/titles/PageTitle';
import InputText from '@/components/molecules/inputs/InputText';

import { ButtonWrap, InputWrap } from '@/styles/commonStyle';
import defaultTheme from '@/styles/defaultTheme';
import { space } from '@/styles/sizes';

import { ERROR_MESSAGE } from '@/constants';

import { SignupRequest } from '@/api/types/user';

import useUserService from '@/services/userService';

import useAlert from '@/hooks/useAlert';

export default function SignupForm() {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { showAlert } = useAlert();
  const { signup, getUser } = useUserService();

  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const isPasswordCorrect = password === passwordConfirm;

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleChangePasswordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPasswordConfirm(value);
  };

  const isValidCheck = useMemo(() => {
    if (email.length === 0
      || name.length === 0
      || password.length === 0
      || passwordConfirm.length === 0) return false;
    return emailRegEx.test(email) && isPasswordCorrect;
  }, [email, name, password, passwordConfirm]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (isLoading) return;
    setIsLoading(true);

    const requestBody: SignupRequest = {
      email, password, name,
    };

    signup(
      requestBody,
      () => {
        getUser(
          () => {
            setIsLoading(false);
            router.push('/');
          },
          () => {
            showAlert({
              message: ERROR_MESSAGE.USER.INVALED_TOKEN,
            });
            setIsLoading(false);
          },
        );
      },
      () => {
        showAlert({
          message: ERROR_MESSAGE.USER.INVALED_SIGNUP,
        });
        setIsLoading(false);
      },
    );
  };

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isValidCheck) return;
    const { keyCode } = event;
    if (keyCode === 13) {
      handleSubmit(event);
    }
  }, [email, name, password, passwordConfirm]);

  return (
    <form name="signupForm" onSubmit={handleSubmit}>
      {isValidCheck}
      <PageTitle title="회원가입" mb={space.m} />
      <InputWrap>
        <InputText
          type="email"
          label="이메일"
          placeholder="이메일을 입력해 주세요."
          onChange={handleChangeEmail}
        />
        <InputText
          type="text"
          label="닉네임"
          placeholder="닉네임을 입력해 주세요."
          onChange={handleChangeNickname}
        />
        <InputText
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요."
          onChange={handleChangePassword}
        />
        <InputText
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 한번 더 입력해 주세요."
          onChange={handleChangePasswordConfirm}
          onKeyDown={handleKeyDown}
        />
      </InputWrap>
      <ButtonWrap>
        <Button
          type="submit"
          isPrimary
          isDisabled={!isValidCheck}
        >
          {(isLoading) ? <LoadingSpinner color={defaultTheme.colors.white} /> : '회원 가입하기'}
        </Button>
      </ButtonWrap>
    </form>
  );
}
