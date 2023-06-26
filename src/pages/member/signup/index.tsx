import styled from 'styled-components';

import PageTitle from '@/components/atoms/titles/PageTitle';
import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import PageWrap from '@/components/atoms/wrap/PageWrap';
import Header from '@/components/organisms/Header';

import { maxWidth, space } from '@/styles/sizes';
import InputText from '@/components/molecules/inputs/InputText';
import Button from '@/components/atoms/buttons/Button';
import { FlexColumn } from '@/styles/commonStyle';

const Container = styled.div`

`;

const InputWrap = styled.div`
  ${FlexColumn}
  gap: ${space.xs};
  margin-bottom: ${space.m};
`;

const ButtonWrap = styled.div`
  ${FlexColumn}
  gap: ${space.xs};
`;

export default function SignupPage() {
  return (
    <Container>
      <Header />
      <PageWrap>
        <MaxWidthWrap
          maxWidth={maxWidth.middle}
        >
          <PageTitle title="회원가입" mb={space.m} />
          <InputWrap>
            <InputText
              type="email"
              label="이메일"
              placeholder="이메일을 입력해 주세요."
            />
            <InputText
              type="text"
              label="닉네임"
              placeholder="닉네임을 입력해 주세요."
            />
            <InputText
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해 주세요."
            />
            <InputText
              type="password"
              label="비밀번호 확인"
              placeholder="비밀번호를 한번 더 입력해 주세요."
            />
          </InputWrap>
          <ButtonWrap>
            <Button isPrimary>
              회원 가입하기
            </Button>
          </ButtonWrap>
        </MaxWidthWrap>
      </PageWrap>
    </Container>
  );
}
