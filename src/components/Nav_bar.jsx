
import logo from '../assets/logo1.png';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-transparent">
      <div className="container-fluid justify-content-center">

        {/* Logo */}
        <a className="navbar-brand  me-5 pe-5 " href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '40px' }}
          />
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div
          className="collapse navbar-collapse flex-grow-0"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/dash">Dashboard</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;
