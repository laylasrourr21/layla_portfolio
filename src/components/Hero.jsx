import logo from '../assets/logo1.png'
import '../styles/Hero.css'
function Hero() {
    return (
        <section className="hero-section">

            {/* Left: thin arc line */}
            <div className="hero-arc" aria-hidden="true" />

            {/* Right: big soft circle + leaves */}
            <div className="hero-bg-circle" aria-hidden="true" />
            <svg className="hero-leaves" viewBox="0 0 160 200" aria-hidden="true">
                <defs>
                    <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#7d8460" />
                        <stop offset="1" stopColor="#5e6346" />
                    </linearGradient>
                </defs>
                {/* upper leaf */}
                <path d="M160 0 C 90 20, 40 80, 60 140 C 120 130, 160 80, 160 0 Z"
                    fill="url(#leafGrad)" />
                {/* lower leaf */}
                <path d="M160 130 C 110 130, 70 160, 60 200 C 120 200, 160 180, 160 130 Z"
                    fill="#6b7150" opacity="0.9" />
            </svg>

            {/* YOUR EXISTING CONTENT, unchanged */}
            <div className="container   mt-5">
                <div className="row mt-5 pe-4 ps-4 pb-4 gap-3">
                    <div className="col-lg-1 ">
                    </div>
                    <div className="col-lg-5 col-sm-12 ">
                        <p>HELLO ,I'M</p>
                        <h1>Layla Srour</h1>
                        <p>Computer Science Graduate</p>
                        <p>Where algorithms meet aesthetics.
                            Combining analytical thinking, clean code, and thoughtful design to build meaningful digital experiences.
                        </p>

                        <div className="row g-2 ">
                            <div className="col-12 col-sm-auto">
                                <button
                                    className="btn rounded-5 text-light w-100"
                                    style={{
                                        backgroundColor: "#5e6346",
                                        border: "none"
                                    }}
                                >
                                    View My Projects
                                </button>
                            </div>

                            <div className="col-12 col-sm-auto">
                                <button className="btn rounded-5 w-100">
                                    Download CV
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-5 col-sm-12 d-flex justify-content-center align-items-center ">
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-12 d-flex justify-content-center align-items-center'>

                                <div className="hero-art">
                                    <div className="hero-blob" />
                                    <div className="hero-circle" />
                                    <img src={logo} alt="Layla Srour logo" className="hero-logo" />
                                </div>



                            </div>
                            <div className='col-12 d-flex justify-content-center align-items-center'>
                                <p className="hero-tagline">CODE . BUILD . IMPROVE</p> </div>
                        </div>

                    </div>
                    <div className="col-lg-1 ">

                    </div>

                </div>

            </div>

        </section>
    )
}
export default Hero