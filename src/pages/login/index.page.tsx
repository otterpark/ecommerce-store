import { ReactElement } from 'react';
import styled from 'styled-components';

import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import LoginForm from '@/components/organisms/forms/LoginForm';
import PageWrap from '@/components/atoms/wrap/PageWrap';
import withAccessPermission from '@/components/hocs/withAccessPermission';

import { maxWidth } from '@/styles/sizes';

import Layout from '../layout';

const Container = styled.div``;

function LoginPage() {
  return (
    <Container>
      <PageWrap>
        <MaxWidthWrap maxWidth={maxWidth.middle}>
          <LoginForm />
        </MaxWidthWrap>
      </PageWrap>
    </Container>
  );
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
};

export default withAccessPermission(LoginPage, 'public');
