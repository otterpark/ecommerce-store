import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Reset } from 'styled-reset';

import defaultTheme from '../styles/defaultTheme';
import GlobalStyle from '../styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  const theme = defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />
    </ThemeProvider>
  );
}
