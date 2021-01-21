import React from 'react'
import { useRouter } from 'next/router'
import Header from "components/Header"
import Footer from "components/Footer"
import { AnimatePresence } from 'framer-motion'

import 'styles/globals.scss'
import 'styles/helper.scss'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  return (
    <React.Fragment>
      <AnimatePresence exitBeforeEnter>
        <Header />
          <Component {...pageProps} />
        <Footer />
      </AnimatePresence>
    </React.Fragment>
  )
}

export default MyApp
