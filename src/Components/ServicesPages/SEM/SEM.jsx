import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap'
import '../SEM/SEM.css'


export default function SEM() {

    return (

        <>
        <Row>
        <Col md  className='MainrodivSem' style={{backgroundImage:"url('Image/image 3 (1).png')"}}>
        <div>
        <h1>Welcome to Social Engine Marketing</h1>
        </div>
        </Col>
        </Row>
        <Row className='justify-content-center align-items-center gap-5 py-5 bgrem' style={{backgroundImage:"url('Image/blue.png')",backgroundSize:"50%",backgroundPosition:"right",backgroundRepeat:"no-repeat"}} >
        <Col md={5}>
            <h2 className='hed2 text-center'>What is PPC</h2>
            <p className='para text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
            laborum.</p>
        </Col>
        <Col md={5} className='d-flex justify-content-center align-items-center'>
            <img src="/Image/sem.png" alt="" className='img-fluid' />
        </Col>
    </Row>
     <Row className='justify-content-center bgsection-homepage-sem  align-items-center gap-5 py-5  '>
                    {/* First image for large screens */}
                    <Col md={5} className='d-none d-sm-flex justify-content-center align-items-center'>
                        <img src="/Image/sem1 (5).png" alt="" className='img-fluid'/>
                    </Col>
                    {/* Content for all screens */}
                    <Col md={5} >
                        <h2 className='text-center hed2'>Straight to the customers</h2>
                        <p className='para text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
            laborum.</p>
                    </Col>
                    {/* Second image for small screens */}
                    <Col md={5} className="d-sm-none">
                        <img
                            src="/Image/sem1 (5).png"
                            alt=""
                            className="img-fluid"
                           
                        />
                    </Col>
                </Row>
  
            <Row className='justify-content-center align-items-center gap-5 py-5 '>
                    <Col md={5}>
                        <h2 className='hed2 text-center'>What’s the Hype about?</h2>
                        <p className='para text-justify'>   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                        laborum.</p>
                    </Col>
        <Col md={5} className='d-flex justify-content-center align-items-center'>
      
                        <img src="/Image/sem1 (4).png" alt="" className='img-fluid' />
                    </Col>
                </Row>
                <Row className='justify-content-center align-items-center gap-5 py-5 bgsectionsem1'>
                {/* First image for large screens */}
                <Col md={5} className='d-none d-sm-flex justify-content-center align-items-center'>
                    <img src="/Image/sem1 (3).png" alt="" className='img-fluid'/>
                </Col>
                {/* Content for all screens */}
                <Col md={5} >
                    <h2 className='text-center hed2 text-light'>Who is it for?</h2>
                    <p className=' text-justify  text-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum.</p>
                </Col>
                {/* Second image for small screens */}
                <Col md={5} className="d-sm-none">
                    <img
                        src="/Image/sem1 (3).png"
                        alt=""
                        className="img-fluid"
                       
                    />
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center gap-5 py-5  bgsectionsem2'>
                    <Col md={5}>
                        <h2 className='hed2 text-light text-center'>Which Ad to choose</h2>
                        <p className='text-justify text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                        laborum.</p>
                    </Col>
        <Col md={5} className='d-flex justify-content-center align-items-center'>
       
                        <img src="/Image/sem1 (2).png" alt="" className='img-fluid' />
                    </Col>
                </Row>
                <Row className='justify-content-center align-items-center gap-5 py-5'>
                {/* First image for large screens */}
                <Col md={5} className='d-none d-sm-flex justify-content-center align-items-center'>
                    <img src="/Image/sem1 (1).png" alt="" className='img-fluid'/>
                </Col>
                {/* Content for all screens */}
                <Col md={5} >
                    <h2 className='text-center hed2'>Need experts? Call Razobyte!</h2>
                    <p className='para text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum.</p>
                </Col>
                {/* Second image for small screens */}
                <Col md={5} className="d-sm-none">
                    <img
                        src="/Image/sem1 (1).png"
                        alt=""
                        className="img-fluid"
                       
                    />
                </Col>
            </Row> 
            <Row className='flex justify-content-center align-items-center py-5'>
            <Col md={10}>
            <h2 className='hed2 text-center'>Top Soical Media Projects</h2>
            <div className='d-flex justify-content-center align-items-center gap-[150px] py-5'>
            <div className='Semproj-shadow'>
            <img src="Image/Sem-top-pr-1.png" alt="" className='img-fluid'/>
            <img src=" Image/Sem-top-pr-2.png" alt="" className='img-fluid w-50'/>
            </div>
            <div className='Semproj-shadow'> 
            <div className='d-flex justify-content-center align-items-center gap-2'>
            <img src="Image/image 2 (1).png" alt=""  className='img-fluid w-50' />
            <img src="Image/img (11).png" alt=""  className='img-fluid w-50'/>
            <img src="Image/img (13).png" alt=""  className='img-fluid w-50'/>
            
            </div>
            <div className='d-flex justify-content-center align-items-center gap-2'>
            <img src="Image/img (9).png" alt=""  className='img-fluid w-50'/>
            <img src="Image/img (12).png" alt=""  className='img-fluid w-50'/>
            <img src="Image/img (15).png" alt=""  className='img-fluid w-50'/>
            
    
            </div>
            </div>
            
            </div>
            </Col>
            </Row>   
               
             

            
              
                
                <Row className='d-flex justify-content-center align-items-center py-5'>
                    <Col md={5} className='d-flex justify-content-center align-items-center mb-3'>
                        <div className='custom2-shadow'>
                            <img src="/Image/Sem-last.png" alt="" className='img-fluid'/>
                            <p className='para pt-2 text-center'> Social Media Optimization</p>
                        </div>
                    </Col>
                    <Col md={5} className='d-flex justify-content-center align-items-center mb-3 '>
                        <div className='custom2-shadow'>
                            <img src="/Image/programming (1) 1 (3).png" alt="" className='img-fluid'/>
                            <p className='para pt-3 text-center'>Social Media Marketing</p>
                        </div>

                    </Col>

                </Row>
                <Row style={{ backgroundColor: "#5e5e5e" }} className='py-3 d-flex justify-content-center align-items-center'>
                <Col md={10} className='d-md-flex justify-content-center align-items-center gap-md-5 fw-bold'
                    style={{ color: "#FFFF", letterSpacing: "2px" }}>
                    <p className='my-2 ml-5'>Getting Your Dream Design is no sweat. a simple mouse click is all you need to get</p>
                    <Button variant='dark' className='my-2 py-2 btn1'>Click Here</Button>
                </Col>
            </Row>
   
        </>

    )
}