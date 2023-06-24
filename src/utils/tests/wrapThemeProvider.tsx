import React, { ReactElement } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions } from '@testing-library/react';
import defaultTheme from '@/styles/defaultTheme';
import { ThemeProvider } from 'styled-components';

function AllTheProviders({ children }: {children: React.ReactNode}) {
  const theme = defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

const wrapThemeProviderRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';
export { wrapThemeProviderRender as render };
