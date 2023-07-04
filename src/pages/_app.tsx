/* eslint-disable import/no-extraneous-dependencies */
import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/features';

import ModalAlert from '@/components/organisms/modal/ModalAlert';
import { Header, Footer } from '@/components/organisms';

import defaultTheme from '../styles/defaultTheme';
import GlobalStyle from '../styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  const theme = defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Reset />
          <GlobalStyle />
          <Header />
          <Component
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...pageProps}
          />
          <Footer />
          <ModalAlert />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
