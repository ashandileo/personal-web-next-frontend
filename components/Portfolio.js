import Link from 'next/link'
import { motion } from "framer-motion"

const Portfolio = () => {

  const listPortfolio = [
    {
      src: "/github_finder.png",
      slug: "github-finder"
    },
    {
      src: "/github_finder.png",
      slug: "github-finder"
    },
    {
      src: "/github_finder.png",
      slug: "github-finder"
    },
    {
      src: "/github_finder.png",
      slug: "github-finder"
    }
  ]

  const linkProps = (href, as) => {
    return {
      href: href,
      as: as
    }
  }

  return (
    <div className="container mt-50 pb-50">
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
        <h1 className="tw-font-medium fs-36">Portfolio</h1>
        <p className="fs-16 mt-4">Check out my portfolio to see my recent work</p>
      </div>
      <div className="tw-flex tw-justify-center tw-items-center mt-40 tw-flex-wrap">
        {
          listPortfolio.map(portfolio => (
            <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.80 }} className="portfolio-item tw-shadow-lg mb-20 mr-20 tw-relative" style={{ width: "calc(33.33% - 20px)" }}>
              <Link {...linkProps("[slug]", portfolio.slug)}>
                <a>
                  <div className="backdrop tw-absolute tw-bg-transparent tw-opacity-100 tw-w-full tw-h-full"></div>
                  <p className="text-view-detail tw-absolute tw-z-10 tw-w-full tw-h-full tw-opacity-0 tw-text-white tw-flex tw-justify-center tw-items-center tw-font-bold">View Detail</p>
                  <img src={portfolio.src} />
                </a>
              </Link>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio