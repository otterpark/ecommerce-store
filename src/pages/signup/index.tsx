import styled from 'styled-components';

import PageWrap from '@/components/atoms/wrap/PageWrap';
import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import SignupForm from '@/components/organisms/forms/SignupForm';

import { maxWidth } from '@/styles/sizes';

const Container = styled.div`

`;

export default function SignupPage() {
  return (
    <Container>
      <PageWrap>
        <MaxWidthWrap
          maxWidth={maxWidth.middle}
        >
          <SignupForm />
        </MaxWidthWrap>
      </PageWrap>
    </Container>
  );
}
