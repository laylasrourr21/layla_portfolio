import logo from '../assets/logo1.png'
import '../styles/Hero.css'
function Hero() {
    return (
        <section className="hero-section mt-5">

            {/* Left: thin arc line */}
            <div className="hero-arc" aria-hidden="true" />

            {/* Right: big soft circle + leaves */}
            <div className="hero-bg-circle" aria-hidden="true" />
            

            {/* YOUR EXISTING CONTENT, unchanged */}
            <div className="container  ">
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