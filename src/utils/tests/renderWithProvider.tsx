/* eslint-disable import/no-extraneous-dependencies */
import { ReactElement, ReactNode } from 'react';
import { RenderOptions, render as rtlRender } from '@testing-library/react';
import { PreloadedState } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';

import {
  AppStore, RootState, persistor, setupStore,
} from '@/features';

import defaultTheme from '@/styles/defaultTheme';

type ExtendedRenderOptions = {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
  theme?: DefaultTheme;
} & Omit<RenderOptions, 'queries'>

type WrapperProps = {
  children: ReactNode,
}

function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    theme = defaultTheme,
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: WrapperProps): JSX.Element {
    return (
      <ThemeProvider theme={theme}>
        <PersistGate persistor={persistor}>
          <Provider store={store}>
            {children}
          </Provider>
        </PersistGate>
      </ThemeProvider>
    );
  }
  return {
    store,
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';
export { renderWithProviders as render };
