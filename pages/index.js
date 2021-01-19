import About from "components/About"
import Header from "components/Header"
import Portfolio from "components/Portfolio"
import Skills from "components/Skills"
import Footer from "components/Footer"

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  )
}

export default Home