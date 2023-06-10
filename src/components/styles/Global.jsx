import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  body {
    background-image: linear-gradient(rgba(52, 53, 65, 1), rgba(52, 53, 65, 0.8));
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
  }

  #root {
    min-height: 100%;
  }

  footer {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default GlobalStyles
