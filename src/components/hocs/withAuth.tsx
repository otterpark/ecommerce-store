import useAlert from '@/hooks/useAlert';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';

export default function withAuth<P extends object>(WrappedComponent: FunctionComponent<P>) {
  // eslint-disable-next-line func-names, react/display-name, react/function-component-definition
  return (props: P) => {
    const router = useRouter();
    const { auth } = useAuth();
    const { showAlert } = useAlert();

    useEffect(() => {
      if (!auth.isAuthenticated) {
        showAlert('접근 권한이 없거나 잘못된 접근입니다.');
        router.push('/');
      }
    }, []);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} />;
  };
}
