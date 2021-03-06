import Link from "next/link"
import { useRouter } from 'next/router'
import useScrollPosition from "../hooks/useScrollPosition"

const Header = () => {

  const { scrollPosition } = useScrollPosition()

  const router = useRouter()

  return (
    <header className={`dark-purple my-header ${router.pathname != "/" ? "" : scrollPosition >= 0.15 && scrollPosition <= 0.23 ? "fixed" : scrollPosition >= 0.24 ? "fixed to-bottom" : ""}`}>
      <div className="container tw-flex tw-justify-between tw-items-center py-18">
        <div className="tw-text-white fs-18">
          <Link href="/">
            <a className="tw-text-white">Ashandi .</a>
          </Link>
        </div>
        <ul className="tw-flex tw-text-white mb-0">
          {
            router.pathname !== "/" && (
              <li className="mr-24 fs-14">
                <Link href="/">
                  <a className="tw-text-white">Home</a>
                </Link>
              </li>
            )
          }
          {
            router.pathname === "/" && (
              <>
                <li className="mr-24 fs-14">
                  <a className="tw-text-white">About</a>
                </li>
                <li className="mr-24 fs-14">
                  <a className="tw-text-white">Portfolio</a>
                </li>
                <li className="mr-24 fs-14"> 
                  <a className="tw-text-white">Skills</a>
                </li>
                <li className="fs-14">
                  <a className="tw-text-white">Contact</a>
                </li>
              </>
            )
          }
        </ul>
      </div>
    </header>
  )
}

export default Header