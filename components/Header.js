import Link from "next/link"
import { useRouter } from 'next/router'

const Header = () => {

  const router = useRouter()

  return (
    <header className="dark-purple">
      <div className="container tw-flex tw-justify-between tw-items-center py-18">
        <div className="tw-text-white fs-18">
          <Link href="/">
            <a>Ashandi .</a>
          </Link>
        </div>
        <ul className="tw-flex tw-text-white">
          {
            router.pathname !== "/" && (
              <li className="mr-24 fs-14">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
            )
          }
          {
            router.pathname === "/" && (
              <>
                <li className="mr-24 fs-14">
                  <a>About</a>
                </li>
                <li className="mr-24 fs-14">
                  <a>Portfolio</a>
                </li>
                <li className="mr-24 fs-14"> 
                  <a>Skills</a>
                </li>
                <li className="fs-14">
                  <a>Contact</a>
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