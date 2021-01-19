const Header = () => {
  return (
    <header className="dark-purple">
      <div className="container tw-flex tw-justify-between tw-items-center py-18">
        <div className="tw-text-white fs-18">
          Ashandi .
        </div>
        <ul className="tw-flex tw-text-white">
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
        </ul>
      </div>
    </header>
  )
}

export default Header