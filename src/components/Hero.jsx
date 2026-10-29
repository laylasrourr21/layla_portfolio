import logo from '../assets/logo1.png'
function Hero() {
    return (
        <>
            <div className="container   mt-5">
                <div className="row mt-5 pe-4 ps-4 pb-4 gap-3">
                    <div className="col-lg-1 ">
                    </div>
                    <div className="col-lg-5 col-sm-12 ">
                        <p>HELLO ,I'M</p>
                        <h1>Layla Srour</h1>
                        <p>Computer Science Graduate</p>
                        <p>Passionate about building modern web applications,
                            solving problems with clen code, and creating
                            meaningful digital experience.
                        </p>

                        <div className="row g-2 mt-3">
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
                                <img src={logo} className='img-responsive' style={{ height: "70%", width: "60%" }}>
                                </img>

                            </div>
                            <div className='col-12 d-flex justify-content-center align-items-center'>
                                <p>CODE . BUILD . IMPROVE</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-1 ">

                    </div>

                </div>

            </div>
        </>
    )
}
export default Hero