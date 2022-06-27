import { Global, css } from '@emotion/react'

const GlobalStyle = () => (
  <Global 
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
      * {
        font-family: 'Poppins', sans-serif;
        padding: 0;
        margin: 0;
      }
    `}
  />
)

export default GlobalStyle;
