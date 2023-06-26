import { createGlobalStyle } from 'styled-components';
import { fontSize } from './sizes';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'NanumBarunGothic', 'Malgun Gothic', '맑은 고딕', 'Apple SD Gothic Neo', '돋움', sans-serif;
    font-size: ${fontSize.default};
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text}
  }

  a {
    color: ${(props) => props.theme.colors.text}
  }

  input-security,
  textarea,
  select,
  button {
    font-size: 1em;
  }

  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
    }
  }
`;

export default GlobalStyle;
