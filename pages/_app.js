import React from 'react'
import { useRouter } from 'next/router'
import Header from "components/Header"
import Footer from "components/Footer"

import 'styles/globals.css'
import 'styles/helper.scss'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  return (
    <React.Fragment>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}

export default MyApp
