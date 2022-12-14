import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Secular_One} from '@next/font/google'

const seculer = Secular_One({
  subsets: ['latin'],
  weight: ['400', '400'],
  variable: '--font--secular'
})

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <main className={`${seculer.variable} font-sans`}>
  <Component {...pageProps} />
  </main>
  )
}
