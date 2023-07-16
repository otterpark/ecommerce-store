import { ReactElement } from 'react';
import styled from 'styled-components';

import PageWrap from '@/components/atoms/wrap/PageWrap';
import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import SignupForm from '@/components/organisms/forms/SignupForm';
import withAccessPermission from '@/components/hocs/withAccessPermission';

import { maxWidth } from '@/styles/sizes';

import Layout from '../layout';

const Container = styled.div`

`;

function SignupPage() {
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

SignupPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
};

export default withAccessPermission(SignupPage, 'public');
