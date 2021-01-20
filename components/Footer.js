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
            <h1 className="tw-font-medium fs-36 mb-12">Social</h1>
            <div className="mb-24">
              <GitHubIcon fontSize="large" className="mr-20" />
              <InstagramIcon fontSize="large" className="mr-20" />
              <LinkedInIcon fontSize="large" />
            </div>
          </>
        )
      }
      <p>Ashandi Leonadi @ 2021</p>
    </footer>
  )
}

export default Footer