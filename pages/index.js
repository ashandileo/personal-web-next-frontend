import { useEffect } from "react"
import About from "components/About"
import Portfolio from "components/Portfolio"
import Skills from "components/Skills"
import { motion } from "framer-motion"
import { animationOne, transition } from "../utils/animations/index"
import useScrollPosition from "../hooks/useScrollPosition"

const Home = () => {

  const { setScrollPosition } = useScrollPosition()

  const listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrolled = winScroll / height
    setScrollPosition(scrolled.toFixed(2))
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  }, [])

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <About />
      <Portfolio />
      <Skills />
    </motion.div>
  )
}

export default Home