/* eslint-disable max-len */
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';

import useAlert from '@/hooks/useAlert';
import useAuth from '@/hooks/useAuth';

import { ERROR_MESSAGE } from '@/constants';

export default function withAccessPermission<P extends object>(
  WrappedComponent: FunctionComponent<P>,
  access: 'auth' | 'public',
) {
  // eslint-disable-next-line func-names, react/display-name, react/function-component-definition
  return (props: P) => {
    const router = useRouter();
    const { auth } = useAuth();
    const { showAlert } = useAlert();

    function goHomepage() {
      showAlert(ERROR_MESSAGE.AUTH.INVALED_ACCESS);
      router.push('/');
    }

    useEffect(() => {
      // eslint-disable-next-line react/destructuring-assignment
      switch (access) {
      case 'auth':
        if (!auth.isAuthenticated) {
          goHomepage();
        }
        break;
      case 'public':
        if (auth.isAuthenticated) {
          goHomepage();
        }
        break;
      default:
        break;
      }
    }, []);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} />;
  };
}
