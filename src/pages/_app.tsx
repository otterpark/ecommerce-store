import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Reset } from 'styled-reset';

import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';

import defaultTheme from '../styles/defaultTheme';
import GlobalStyle from '../styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  const theme = defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Header />
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />
      <Footer />
    </ThemeProvider>
  );
}
