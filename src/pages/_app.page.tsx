import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/features';

import ModalAlert from '@/components/organisms/modal/ModalAlert';
import Modal from '@/components/organisms/modal/Modal';

import { AppPropsWithLayout } from '@/types/nextPage';

import defaultTheme from '../styles/defaultTheme';
import GlobalStyle from '../styles/GlobalStyle';

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
          <Modal />
          <ModalAlert />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
