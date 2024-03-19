import { Helmet } from 'react-helmet';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Button} from 'react-bootstrap';
import { useState, } from 'react';
import Marquee from 'react-fast-marquee';
import '../../HomePages/Home/Home.css'
import Blog from '../../Blog/Blog2';
import Contact from '../../HomePages/Contact/Contact';
import Banner from '../../HomePages/Bannerpage/Banner';
import Count from '../../HomePages/Count/Count'
import ScrollTrigger from 'react-scroll-trigger'
import Testominials from '../Testominals/Testomnials';
import Port from '../Port/Port';
import { useNavigate } from 'react-router';
import Services from '../Services/Services';
import Technical from '../TechnicalDev/Technical';





export default function Home({title}) {
    const [clients, setClients] = useState(false)
    const navigate=useNavigate()





    return (

        <>
        <Helmet>
        <title>Home Page</title>
        <meta
        name="Home page"
        content="This is my Home page"
         />
        
        </Helmet>

            <ScrollTrigger onEnter={() => setClients(true)} onExit={() => setClients(false)} >
                <Banner />
                <Count clients={clients} />
                <Row className=' d-none d-sm-flex justify-content-center align-items-center py-5 px-0 gap-5'
                    style={{
                        backgroundColor:"#FFFF "

                    }}>
                    <div className='text-center'>
                    <h2 className='hed2'>What’s the Raze about!</h2>
                    <h2 className='para'>Transforming Ideas into Digital Solutions</h2>
                    </div>
                    <Col md={5} className='d-md-flex' 
                  >
                        <Image src='/Image/Home-2.png' alt='' fluid style={{borderRadius: "4px",boxShadow:"5px 2px 5px 2px rgba(0,0,0,0.0.168)",backgroundColor:"#3b7fbf6c "}}
                    
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
                          
                            <p className='sm text-left'>A leading IT company that makes a perfect blend of 
                            Technology and Marketing. With the world getting 
                            smaller day by day, new trends are emerging much 
                            more frequently than usual, specially with AI riding 
                            the highest horses. So how can businesses ensure their 
                            website remain relevant?</p>
                           <p className='sm text-left'> The solution is simple, stay ahead of the trends! 
                            There are 3 phases in which people hop on trends, 
                            Early Adopters, Followers, and the rest. The people who 
                            gain the most from trends are the early adopters, and 
                            that is what we aim for. Our team of Marketers and 
                            Developers, constantly look for the patterns and 
                            upcoming trends in order to ensure that our client’s 
                            always look updated and the designs look latest.
                            </p>
                         
                            <div className='py-2'>
                            <Button variant='light' className='btnmain'
                            onClick={()=>navigate('/about')}>Know More</Button>
                            </div>
                           
                        </div>
                    </Col>
                </Row>
                <Row className='d-block d-sm-none pt-3'
                    style={{
                        backgroundImage: "url('/Image/grey.png')",
                        backgroundSize: "80%",
                        backgroundPosition: "center",
                        backgroundColor:"#FFFF",
                        backgroundRepeat:"no-repeat"
                    }}
                >
                <div className='text-center'>
                <h2 className='hed2'>What’s the Raze about!</h2>
                <h2 className='subheading-sections'>Transforming Ideas into Digital Solutions</h2>
                </div>
                    <Col md ={6}>
                        <div className='spacing'>
                            <p className='sm text-left'>A leading IT company that makes a perfect blend of 
                            Technology and Marketing. With the world getting 
                            smaller day by day, new trends are emerging much 
                            more frequently than usual, specially with AI riding 
                            the highest horses. So how can businesses ensure their 
                            website remain relevant?</p>
                           <p className='sm text-left'> The solution is simple, stay ahead of the trends! 
                            There are 3 phases in which people hop on trends, 
                            Early Adopters, Followers, and the rest. The people who 
                            gain the most from trends are the early adopters, and 
                            that is what we aim for. Our team of Marketers and 
                            Developers, constantly look for the patterns and 
                            upcoming trends in order to ensure that our client’s 
                            always look updated and the designs look latest.
                            </p>
                                <div className='d-flex justify-content-center  pb-3'> 
                                <Button variant='light' className='btnmain' style={{ borderRadius: '1px' }}
                                onClick={()=>navigate('/about')}
                             >Know More</Button>
                                </div>
                        </div>
                    </Col>
                    <Col md={4} className='d-md-flex align-items-center d-none'
                    >
                    <Image src='/Image/Home-2.png' alt='' fluid style={{ maxWidth: "100%", maxHeight: "105%", borderRadius: "4px",boxShadow:"2px 2px 2px 2px rgba(0,0,0,0.1)",backgroundColor:"#3b7fbf6c ",paddingTop:"50px"}}
                    />
                    </Col>
                </Row>
                <Services/>
                <Technical/>
                <Row className='d-flex justify-content-center align-items-center flex-wrap py-5'
                style={{backgroundImage:"url('Image/Rectangle 51 (1).png')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}
                    >
                    <div className='text-center'>
                        <h2 className='hed2 text-light'>Our Clients</h2>
                        <p className='para text-light text-center'>From startups to Fortune 500 companies,</p>
                    </div>
                    <Col md >
                        <Marquee>
                            <div className='allclients'>
                                <div className='d-flex'>
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

                <Port />
                <Blog 
                title="Blogs"/>
           

            </ScrollTrigger>











        </>

    )
}