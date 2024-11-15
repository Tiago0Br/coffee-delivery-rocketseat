import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.background};
    font-family: "Baloo 2", sans-serif;
    padding-left: 6rem;
    padding-right: 6rem;
  }
`
