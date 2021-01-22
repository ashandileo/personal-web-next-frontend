import { useRouter } from 'next/router'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {

  const router = useRouter()

  return (
    <footer className="dark-purple tw-text-center py-24 tw-text-white">
      {
        router.pathname === "/" && (
          <>
            <h1 className="tw-font-medium fs-36 mb-12 te-text-white">Social</h1>
            <div className="mb-24">
              <a href="https://github.com/ashandileo" target="__blank">
                <GitHubIcon fontSize="large" className="mr-20" />
              </a>
              <a href="https://www.instagram.com/ashandi.leo/" target="__blank">
                <InstagramIcon fontSize="large" className="mr-20" />
              </a>
              <a href="https://www.linkedin.com/in/ashandi-leonadi-509374176/" target="__blank">
                <LinkedInIcon fontSize="large" />
              </a>
            </div>
          </>
        )
      }
      <p>Ashandi Leonadi @ 2021</p>
    </footer>
  )
}

export default Footer