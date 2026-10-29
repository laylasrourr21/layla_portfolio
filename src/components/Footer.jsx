import logo from '../assets/logo1.png'
function Footer(){
    return(
        <>
        <div className="container rounded-2 " style={{backgroundColor:"#555b41"}}>
             <div className="row">
                <div className="col-4 col-sm-auto">
                       <div className='row'>
                        <div className='col-6'>
                            <img src={logo} className='img-responsive' style={{height:"30px",width:"30px"}}></img>

                        </div>
                        <div className='col-6 text-light'>
                            <p>Let's work
                                together
                            </p>

                        </div>

                       </div>
                </div>
                <div className="col-4 col-sm-auto">

                </div>
                <div className="col-4 col-sm-auto">

                </div>

             </div>
        </div>
        </>
    )
}
export default Footer