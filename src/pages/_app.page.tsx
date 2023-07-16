/* eslint-disable import/no-extraneous-dependencies */
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/features';

import ModalAlert from '@/components/organisms/modal/ModalAlert';

import defaultTheme from '../styles/defaultTheme';
import GlobalStyle from '../styles/GlobalStyle';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const theme = defaultTheme;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Reset />
          <GlobalStyle />
          {getLayout(
            <Component
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...pageProps}
            />,
          )}
          <ModalAlert />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
