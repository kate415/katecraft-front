import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>けいとくらふと情報局</title>
      </Head>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='m-10 md:m-20 grow'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  )
}
export default MyApp
