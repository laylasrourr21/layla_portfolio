
import logo from '../assets/logo1.png';
import '../styles/Nav.css'
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm bg-transparent">
            <div className="container ">

                {/* Logo */}
                <Link className="navbar-brand ms-4  ps-lg-5 ps-sm-5 ms-lg-5 ms-sm-5" to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: '40px' }}
                    />
                </Link>

                {/* Mobile toggle */}
                <button
                    className="navbar-toggler pe-lg-5 me-lg-5 me-4"
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
                    className="collapse navbar-collapse pe-lg-5 me-5 flex-grow-0 justify-content-center"
                    id="collapsibleNavbar"
                >
                    <ul className="gap-3 navbar-nav justify-content-end g-5">
                        <li className="nav-item">
                            <Link className={`nav-link ${window.location.pathname === "/layla_portfolio/" ? "active" : ""
                                }`} to="/">Home</Link>
                        </li>





                        <li className="nav-item">
                            <Link className="nav-link" to="/">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projcts">Projects</Link>
                        </li>
                        <li className="nav-item me-4 pe-5">
                            <Link className="nav-link" to="/">Contacts</Link>
                        </li>
                        <li className='nav-item '>

                            <button className='btn text-light rounded-5' style={{ backgroundColor: "#5e6346" }}>Get in touch → </button>

                        </li>
                    </ul>
                </div>


            </div>
        </nav>
    );
}

export default NavBar;
