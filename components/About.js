import Button from "components/shared/Button"
import TextLoop from "react-text-loop";
import useScrollPosition from "../hooks/useScrollPosition"

const About = () => {

  const { scrollPosition } = useScrollPosition()
  console.log("🚀 ~ file: About.js ~ line 8 ~ About ~ scrollPosition", scrollPosition)

  const listTech = [
    {
      name: "React",
      src: "/react.png",
      width: "32"
    },
    {
      name: "Next",
      src: "/next.png",
      width: "24"
    },
    {
      name: "Node JS",
      src: "/node.png",
      width: "24"
    },
    {
      name: "MYSQL",
      src: "/mysql.png",
      width: "32"
    },
    {
      name: "Mongo",
      src: "/mongo.png",
      width: "32"
    },
    {
      name: "Firebase",
      src: "/firebase.png",
      width: "24"
    },
  ]

  return (
    <div className={`dark-purple tw-relative ${scrollPosition >= 0.15 ? "mt-63" : ""}`} style={{ height: "75vh" }}>
      <div className="container tw-text-white">
        <h1 className="fs-42 tw-font-bold pt-90">
          Hello. I am Ashandi <br /> Leonadi, a {" "}
          <span className="tw-font-light tw-underline">full stack web <br /> developer</span>
        </h1>
        <p className="fs-14 mt-16">I can develop an app using:</p>
        <div>
          <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
            {
              listTech.map(tech => (
                <div className="fs-18 tw-flex te-items-center mt-8">
                  <span>{tech.name}</span>
                  <img src={tech.src} className={`width-${tech.width} ml-10`} />
                </div>
              ))
            }
          </TextLoop>
        </div>
        <Button className="mt-42 tw-animate-float">
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