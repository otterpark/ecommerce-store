import styled from 'styled-components';

import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import PositionMiddleWrap from '@/components/atoms/wrap/PositionMiddleWrap';
import ErrorContent from '@/components/organisms/error/ErrorContent';

import { maxWidth } from '@/styles/sizes';

import { ERROR_MESSAGE } from '@/constants';

const Error404Container = styled.div``;

export default function Page404() {
  return (
    <Error404Container>
      <PositionMiddleWrap>
        <MaxWidthWrap
          maxWidth={maxWidth.middle}
        >
          <ErrorContent
            imageWidth={320}
            imageAlt="404 error image"
            imageSrc="/assets/page-not-found.png"
            errorText={ERROR_MESSAGE.PAGE.NOT_FOUND}
          />
        </MaxWidthWrap>
      </PositionMiddleWrap>
    </Error404Container>
  );
}
