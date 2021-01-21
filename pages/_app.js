import React from 'react'
import { useRouter } from 'next/router'
import Header from "components/Header"
import Footer from "components/Footer"
import { AnimatePresence } from 'framer-motion'
import NextNprogress from 'nextjs-progressbar';

import 'styles/globals.scss'
import 'styles/helper.scss'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  return (
    <React.Fragment>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <AnimatePresence exitBeforeEnter>
        <Header />
          <Component {...pageProps} />
        <Footer />
      </AnimatePresence>
    </React.Fragment>
  )
}

export default MyApp
