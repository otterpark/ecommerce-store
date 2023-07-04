import React, { ReactElement, ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions } from '@testing-library/react';
import defaultTheme from '@/styles/defaultTheme';
import { ThemeProvider } from 'styled-components';

type WrapperProps = {
  children: ReactNode
}

function renderWithThemeProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  function Wrapper({ children }: WrapperProps): JSX.Element {
    const theme = defaultTheme;
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
  }
  return render(ui, { wrapper: Wrapper, ...options });
}
// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';
export { renderWithThemeProviders as render };
