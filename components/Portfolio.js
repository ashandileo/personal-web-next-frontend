import Link from 'next/link'

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
            <div className="tw-shadow-lg mb-20 mr-20" style={{ width: "calc(33.33% - 20px)" }}>
              <Link {...linkProps("[slug]", portfolio.slug)}>
                <a>
                  <img src={portfolio.src} />
                </a>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio