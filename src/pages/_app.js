import { ChakraProvider } from '@chakra-ui/react'
import { CandidatesProvider } from '../context/useCandidates'
import { MultipleDeleteProvider } from '../context/useMultipleDeleteSelection'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <MultipleDeleteProvider>
      <CandidatesProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </CandidatesProvider>
    </MultipleDeleteProvider>
  )
}

export default MyApp
