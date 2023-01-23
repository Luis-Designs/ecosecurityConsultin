import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Head from 'next/head'
import theme from '../src/utils/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
