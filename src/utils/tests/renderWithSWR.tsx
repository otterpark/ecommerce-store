import React, { ReactElement, ReactNode } from 'react';
import { SWRConfig } from 'swr';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '@/styles/defaultTheme';

type WrapperProps = {
  children: ReactNode
}

function renderWithSWRProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  function Wrapper({ children }: WrapperProps): JSX.Element {
    const theme = defaultTheme;
    return (
      <ThemeProvider theme={theme}>
        <SWRConfig value={{ provider: () => new Map() }}>
          {children}
        </SWRConfig>
      </ThemeProvider>
    );
  }
  return render(ui, { wrapper: Wrapper, ...options });
}
// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';
export { renderWithSWRProviders as render };
