import About from "components/About"
import Portfolio from "components/Portfolio"
import Skills from "components/Skills"
import { motion } from "framer-motion"
import { animationOne, transition } from "../utils/animations/index"


const Home = () => {
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