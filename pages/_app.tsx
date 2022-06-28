import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import GlobalStyle from '../styles/GlobalStyle'
import theme from '../styles/theme'
import { AppProvider } from 'context/appContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  )
}

export default MyApp

