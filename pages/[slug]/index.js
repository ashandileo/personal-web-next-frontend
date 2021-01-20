import { useRouter } from "next/router"
import Badge from "components/shared/Badge"

const Index = () => {

  const router = useRouter()

  return (
    <div className="container mt-30 mb-80">
      <a className="tw-cursor-pointer" onClick={() => router.push("/")}>
        {"<"} Back
      </a>
      <div className="tw-w-full height-450 mt-30">
        <img src="/github_finder.png" className="tw-w-full tw-h-full tw-object-contain" />
      </div>
      <div>
        <h1 className="tw-font-medium fs-24 tw-text-gray-800">Github Finder</h1>
        <p className="fs-18 mt-8 tw-text-gray-600">An application to search github users and repositories</p>
        <div className="tw-flex tw-items-center mt-24">
          <p className="fs-18 tw-text-gray-600 mr-10">Technologies :</p>
          <Badge badgeClass="tw-bg-gray-800 mr-10">React JS</Badge>
          <Badge badgeClass="tw-bg-gray-800 mr-10">NEXT JS</Badge>
          <Badge badgeClass="tw-bg-gray-800 mr-10">Github API</Badge>
        </div>
        <Badge containerClass="mt-20" badgeClass="tw-bg-red-500">LIVE DEMO</Badge>
      </div>
    </div>
  )
}

export default Index