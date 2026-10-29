
import logo from '../assets/logo1.png';
import '../styles/Nav.css'
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
                    <ul className="gap-3 navbar-nav justify-content-end g-5">
                        <li className="nav-item">
                            <a className={`nav-link ${window.location.pathname === "/layla_portfolio/" ? "active" : ""
                                }`} href="/">Home</a>
                        </li>





                        <li className="nav-item">
                            <a className="nav-link" href="/dash">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Projects</a>
                        </li>
                        <li className="nav-item me-4 pe-5">
                            <a className="nav-link" href="#contact">Contacts</a>
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
