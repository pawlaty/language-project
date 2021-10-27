import '../styles/globals.css'
import '../styles/lang.style.css'
import '../styles/card.value.css'
import '../styles/header.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
