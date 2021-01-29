import React from 'react'
import { useRouter } from 'next/router'
import Header from "components/Header"
import Footer from "components/Footer"
import { AnimatePresence } from 'framer-motion'
import NextNprogress from 'nextjs-progressbar';

import 'styles/globals.scss'
import 'styles/helper.scss'
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const { query: { withHeader, withFooter } } = router || {}

  return (
    <React.Fragment>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="4"
      />
      <AnimatePresence exitBeforeEnter>
        {withHeader !== false && <Header />}
          <Component {...pageProps} />
        {withFooter !== false && <Footer />}
      </AnimatePresence>
    </React.Fragment>
  )
}

MyApp.getInitialProps = async (ctx) => {
  return {}
}

export default MyApp  
