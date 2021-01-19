const Portfolio = () => {
  return (
    <div className="container mt-50 pb-50">
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
        <h1 className="tw-font-medium fs-36">Portfolio</h1>
        <p className="fs-16 mt-4">Check out my portfolio to see my recent work</p>
      </div>
      <div className="tw-grid tw-grid-cols-3 tw-gap-6 mt-40">
        <div className="tw-shadow-lg">
          <img src="/github_finder.png" />
        </div>
        <div className="tw-shadow-lg">
          <img src="/github_finder.png" />
        </div>
        <div className="tw-shadow-lg">
          <img src="/github_finder.png" />
        </div>
        <div className="tw-shadow-lg">
          <img src="/github_finder.png" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio