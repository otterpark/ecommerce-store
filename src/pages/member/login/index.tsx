import styled from 'styled-components';

import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import PageWrap from '@/components/atoms/wrap/PageWrap';
import Header from '@/components/organisms/Header';
import PageTitle from '@/components/atoms/titles/PageTitle';

import { maxWidth, space } from '@/styles/sizes';
import InputText from '@/components/molecules/inputs/InputText';
import Button from '@/components/atoms/buttons/Button';
import Link from 'next/link';
import { FlexColumn } from '@/styles/commonStyle';

const Container = styled.div``;

const InputWrap = styled.div`
  ${FlexColumn}
  gap: ${space.xs};
  margin-bottom: ${space.m};
`;

const ButtonWrap = styled.div`
  ${FlexColumn}
  gap: ${space.xs};
`;

export default function LoginPage() {
  return (
    <Container>
      <Header />
      <PageWrap>
        <MaxWidthWrap maxWidth={maxWidth.middle}>
          <PageTitle title="로그인" mb={space.m} />
          <InputWrap>
            <InputText
              type="email"
              label="이메일"
              placeholder="이메일을 입력해 주세요."
            />
            <InputText
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해 주세요."
            />
          </InputWrap>
          <ButtonWrap>
            <Button isPrimary>
              로그인
            </Button>
            <Link href="/member/signup">
              <Button>
                회원가입
              </Button>
            </Link>
          </ButtonWrap>
        </MaxWidthWrap>
      </PageWrap>
    </Container>
  );
}
