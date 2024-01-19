
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Button} from 'react-bootstrap';
import { useState, } from 'react';
import Marquee from 'react-fast-marquee';
import '../../HomePages/Home/Home.css'
import Blog2 from '../../HomePages/Blog/Blog2';
import Contact from '../../HomePages/Contact/Contact';
import Banner from '../../HomePages/Bannerpage/Banner';
import Count from '../../HomePages/Count/Count'
import ScrollTrigger from 'react-scroll-trigger'
import Testominials from '../Testominals/Testomnials';
import Port from '../Port/Port';
import { useNavigate } from 'react-router';
import Services from '../Services/Services';





export default function Home() {
    const [clients, setClients] = useState(false)
    const navigate=useNavigate()





    return (

        <>

            <ScrollTrigger onEnter={() => setClients(true)} onExit={() => setClients(false)} >
                <Banner />
                <Count clients={clients} />
                <Row className=' d-none d-sm-flex justify-content-center align-items-center py-5 px-0 gap-5'
                    style={{
                        backgroundColor:"#FFFF "

                    }}>
                    <div className='text-center'>
                    <h2 className='hed2'>Our Features</h2>
                    <h2 className='subheading-sections'>Transforming Ideas into Digital Solutions</h2>
                    </div>
                    <Col md={4} className='d-md-flex align-items-center justify-content-center' 
                  >
                        <Image src='/Image/our-removebg-preview (1).png' alt='' fluid style={{ maxWidth: "100%", maxHeight: "105%", borderRadius: "4px",boxShadow:"2px 2px 2px 2px rgba(0,0,0,0.1)",backgroundColor:"#3b7fbf6c "}}
                    
                        /></Col>
                    <Col md={5}>
                        <div className='spacing'
                        style={{
                            backgroundImage: "url('/Image/grey.png')",
                            backgroundSize: "70%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundColor:"#FFFF "
    
                        }}>
                          
                            <p className='sm fs-6 fs-md-3'>Welcome to RazoByte SoftTech, a leading IT Services and Digital solutions company empowering businesses globally. We specialize in delivering cutting-edge solutions that drive growth and propel your brand to new heights. With a comprehensive suite of services ranging from web design and development to mobile app design and development, ecommerce solutions, IoT integration, and digital marketing, we have all the tools you need to succeed in the digital landscape.</p>
                            <div className='spacing2'>
                                At RazoByte SoftTech we believe in the power of innovation and technology to transform your ideas into reality. Our team of skilled professionals is dedicated to crafting exceptional digital experiences that captivate your audience and drive tangible results. Whether you are a startup looking to establish your online presence or an established enterprise aiming to stay ahead in the digital race, we have the expertise and creativity to bring your vision to life.
                            </div>
                            <div className='py-3'>
                            <Button variant='light' className='btnmain' style={{ borderRadius: '1px' }} 
                            onClick={()=>navigate('/about')}>Know More</Button>
                            </div>
                           
                        </div>
                    </Col>
                </Row>
                <Row className='d-block d-sm-none pt-5'
                    style={{
                        backgroundImage: "url('/Image/grey.png')",
                        backgroundSize: "80%",
                        backgroundPosition: "center",
                        backgroundColor:"#FFFF",
                        backgroundRepeat:"no-repeat"
                    }}
                >
                <div className='text-center'>
                <h2 className='hed2'>Our Features</h2>
                <h2 className='subheading-sections'>Transforming Ideas into Digital Solutions</h2>
                </div>
                    <Col md ={6}>
                        <div className='spacing'>
                            <p className='sm fs-6 fs-md-3 pt-3'>Welcome to
                                RazoByte SoftTech, a leading IT Services and Digital solutions company empowering businesses globally. We specialize in delivering cutting-edge solutions that drive growth and propel your brand to new heights. With a comprehensive suite of services ranging from web design and development to mobile app design and development, ecommerce solutions, IoT integration, and digital marketing, we have all the tools you need to succeed in the digital landscape.</p>
                                <div className='d-flex justify-content-center  py-3'> 
                                <Button variant='light' className='btnmain' style={{ borderRadius: '1px' }}
                                onClick={()=>navigate('/about')}
                             >Know More</Button>
                                </div>
                        </div>
                    </Col>
                    <Col md={4} className='d-md-flex align-items-center d-none'
                    >
                    <Image src='/Image/our-removebg-preview (1).png' alt='' fluid style={{ maxWidth: "100%", maxHeight: "105%", borderRadius: "4px",boxShadow:"2px 2px 2px 2px rgba(0,0,0,0.1)",backgroundColor:"#3b7fbf6c ",paddingTop:"50px"}}
                
                    />
                    </Col>
                </Row>
                <Services/>
                <Row className='d-flex justify-content-center align-items-center flex-wrap py-5'
                style={{backgroundImage:"url('Image/Rectangle 51 (1).png')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}
                    >
                    <div className='text-center'>
                        <h2 className='hed2 text-light'>Our Clients</h2>
                        <p className='sm text-light text-center'>From startups to Fortune 500 companies,</p>
                    </div>
                    <Col md >
                        <Marquee>
                            <div className='allclients'>
                                <div className='d-flex   ' >
                                    <img src="https://razobyte.com/wp-content/uploads/2019/04/image005-300x200.jpg" alt=" hello" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                    <img src="https://razobyte.com/wp-content/uploads/2019/04/image004-300x200.jpg" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                    <img src="https://razobyte.com/wp-content/uploads/2019/04/galuku_logo-300x200.jpg" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                    <img src="https://razobyte.com/wp-content/uploads/2019/04/ohreco-300x200.jpg" alt="" className='img-fluid' />

                                </div>
                                <div className='d-flex '>
                                    <img src="https://razobyte.com/wp-content/uploads/2019/04/image009-300x200.jpg" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                    <img src="https://razobyte.com/wp-content/uploads/2019/04/yes-creation-1-300x200.png" alt="" className='img-fluid' />
                                </div>
                            </div>

                        </Marquee>
                        <Marquee autoFill pauseOnClick direction='right'>
                            <div className='allclients'>
                                <div className=' d-flex '>
                                    <img src="https://razobyte.com/wp-content/uploads/2019/04/image008-300x200.jpg" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                    <img src="https://razobyte.com/wp-content/uploads/2019/04/image007-300x200.jpg" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                    <img src="https://razobyte.com/wp-content/uploads/2019/04/image006-300x200.jpg" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                    <img src="https://razobyte.com/wp-content/uploads/2019/04/avon-logo-300x200.jpg" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex '>
                                    <img src="https://razobyte.com/wp-content/uploads/2019/04/astro-logo-300x200.jpg" alt="" className='img-fluid' />
                                </div>
                                <div className='d-flex'>
                                    <img
                                        src="https://razobyte.com/wp-content/uploads/2019/04/verona-logo3-1-300x200.png"
                                        alt=""
                                        className='img-fluid'
                                    />
                                </div>
                            </div>

                        </Marquee>
                    </Col>
                </Row>



                <Contact clients={clients} />


                <Testominials />


                <Blog2 />
                <Port />

            </ScrollTrigger>











        </>

    )
}