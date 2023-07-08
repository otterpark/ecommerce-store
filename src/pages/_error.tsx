import { NextPageContext } from 'next';
import styled from 'styled-components';

import MaxWidthWrap from '@/components/atoms/wrap/MaxWidthWrap';
import ErrorContent from '@/components/organisms/error/ErrorContent';
import PositionMiddleWrap from '@/components/atoms/wrap/PositionMiddleWrap';

import { maxWidth } from '@/styles/sizes';

import { ERROR_MESSAGE } from '@/constants';

type ErrorProps = {
  statusCode: number
}

const ErrorContainer = styled.div``;

function Error({ statusCode }: ErrorProps) {
  return (
    <ErrorContainer>
      <PositionMiddleWrap>
        <MaxWidthWrap
          maxWidth={maxWidth.full}
        >
          <ErrorContent
            imageWidth={160}
            imageAlt={`${statusCode} error image`}
            imageSrc="/assets/page-error.png"
            errorText={ERROR_MESSAGE.PAGE.SERVER_ERROR}
          />
        </MaxWidthWrap>
      </PositionMiddleWrap>
    </ErrorContainer>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
