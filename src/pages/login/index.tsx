import styled from 'styled-components';

import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import LoginForm from '@/components/organisms/forms/LoginForm';
import PageWrap from '@/components/atoms/wrap/PageWrap';
import withAccessPermission from '@/components/hocs/withAccessPermission';

import { maxWidth } from '@/styles/sizes';
import { Footer, Header } from '@/components/organisms';

const Container = styled.div``;

function LoginPage() {
  return (
    <Container>
      <Header />
      <PageWrap>
        <MaxWidthWrap maxWidth={maxWidth.middle}>
          <LoginForm />
        </MaxWidthWrap>
      </PageWrap>
      <Footer />
    </Container>
  );
}

export default withAccessPermission(LoginPage, 'public');
