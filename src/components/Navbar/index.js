import { useState } from 'react'
function Navbar() {
  // const navbar = document.querySelector('.fixed-top')
  // window.onscroll = () => {
  //   if (window.scrollY > 400) {
  //     navbar.classList.add('nav-shadow')
  //   } else {
  //     navbar.classList.remove('nav-shadow')
  //   }
  // }
  const [isCollapsed, setIsCollapsed] = useState(false)
  const handleNavbarMenuBtn = () => {
    setIsCollapsed(!isCollapsed)
  }
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      aria-label="navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="img/logo.png"
            alt="site logo"
            style={{ width: 40, height: 'auto' }}
          />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          onClick={handleNavbarMenuBtn}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`navbar-collapse ${
            isCollapsed ? 'collapsed' : 'collapse'
          }`}
          id="navbar"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active-nav-item ex-tb rounded-top">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item ex-tb rounded-top">
              <a className="nav-link" href="#games">
                Games
              </a>
            </li>
            <li className="nav-item ex-tb rounded-top">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item ex-tb rounded-top">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
