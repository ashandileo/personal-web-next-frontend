import Button from "components/shared/Button"

const About = () => {
  return (
    <div className="dark-purple tw-relative" style={{ height: "75vh" }}>
      <div className="container tw-text-white">
        <h1 className="fs-42 tw-font-bold pt-90">
          Hello. I am Ashandi <br /> Leonadi, a {" "}
          <span className="tw-font-light tw-underline">full stack web <br /> developer</span>
        </h1>
        <p className="fs-14 mt-16">I can develop an app using</p>
        <div className="fs-18 tw-flex mt-8">
          React
          <img src="/react.png" className="width-34" />
        </div>
        <Button className="mt-24">
          View My Work
        </Button>
      </div>
      <ul className="tw-text-white tw-absolute tw-right-0 tw-bottom-0 soft-purple py-24 pr-24 pl-50 tw-text-right">
        <li className="fs-14 mb-10">Ashandi</li>
        <li className="fs-14 mb-10">Born in 2001, Jakarta, Indonesia</li>
        <li className="fs-14 mb-10">Completed various programming course</li>
        <li className="fs-14">Always energetic and eager to learn new skills</li>
      </ul>
    </div>
  )
}

export default About