import { AppProps } from 'next/app'

// import { createClient, Provider } from 'urql'
// import { ThemeProvider } from '@emotion/react'
import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '../apollo/client'
import AuthContextProvider from '../context/AuthContextProvider'
// import '../styles/globals.css'
import NavBar from '../components/NavBar'
// import theme from '../theme'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <CSSReset />
        <AuthContextProvider>
          <NavBar />
          <Component {...pageProps} />
        </AuthContextProvider>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
