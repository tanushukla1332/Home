
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Button, CardBody,  CardText,CardTitle } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
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



export default function Home() {
    const[clients, setClients]=useState(false)
  

  


    return (

        <>

        <ScrollTrigger onEnter={() => setClients(true)} onExit={() => setClients(false)} >
                    <Banner/>
                    <Count clients={clients}/>
                    <Row className=' d-none d-sm-flex justify-content-evenly py-5 '
                        style={{
                            backgroundImage: "url('/Image/grey.png')",
                            backgroundSize: "60%",
                            backgroundPosition: "right",
                            backgroundRepeat: "no-repeat",
                            backgroundColor:"#FFFF"

                        }}>
                        <Col md={6} className=' px-1 py-3'>
                            <Image src='/Image/our.jpg' alt='' fluid style={{ maxWidth: "100%", maxHeight: "95%", borderRadius: "4px", boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.1) " }} /></Col>
                        <Col className='mt-4 ml-4'>
                            <div className='spacing'>
                                <h1 className=' hed1 pb-4' style={{ color: "#3B7FBF" }}>Our Features</h1>
                                <h2 className='pb-3 hed2 '>Transforming Ideas into Digital Solutions</h2>
                                <p className='sm fs-6  fs-md-3'>Welcome to RazoByte SoftTech, a leading IT Services and Digital solutions company empowering businesses globally. We specialize in delivering cutting-edge solutions that drive growth and propel your brand to new heights. With a comprehensive suite of services ranging from web design and development to mobile app design and development, ecommerce solutions, IoT integration, and digital marketing, we have all the tools you need to succeed in the digital landscape.</p>
                                <div className='spacing2'>
                                    At RazoByte SoftTech we believe in the power of innovation and technology to transform your ideas into reality. Our team of skilled professionals is dedicated to crafting exceptional digital experiences that captivate your audience and drive tangible results. Whether you are a startup looking to establish your online presence or an established enterprise aiming to stay ahead in the digital race, we have the expertise and creativity to bring your vision to life.
                                </div>

                            </div>
                        </Col>
                    </Row>


                    <Row className='d-block d-sm-none  justify-content-evenly my-5'
                        style={{
                            backgroundImage: "url('/Image/gfg.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                        <Col className='mt-4' >
                            <div className='spacing'>
                                <h1 className='hed1 pb-4' style={{ color: "#3B7FBF" }}>Our Features</h1>
                                <h3 className='pb-3 hed3'>Transforming Ideas into Digital Solutions</h3>
                                <p>Welcome to <span className='text-dark font-weight-bold'>RazoByte SoftTech</span>, a leading IT Services and Digital solutions company empowering businesses globally. We specialize in delivering cutting-edge solutions that drive growth and propel your brand to new heights. With a comprehensive suite of services ranging from web design and development to mobile app design and development, ecommerce solutions, IoT integration, and digital marketing, we have all the tools you need to succeed in the digital landscape.</p>
                                <div className=' spacing2'>
                                    At <span className='text-dark font-weight-bold'>RazoByte SoftTech</span> we believe in the power of innovation and technology to transform your ideas into reality. Our team of skilled professionals is dedicated to crafting exceptional digital experiences that captivate your audience and drive tangible results. Whether you are a startup looking to establish your online presence or an established enterprise aiming to stay ahead in the digital race, we have the expertise and creativity to bring your vision to life.
                                </div>

                                <Button variant='light' className='btnmain my-3 pt-1' style={{ borderRadius: '1px' }} >Get a quote</Button>
                            </div>
                        </Col>
                        <Col md={6} className='px-1 py-3'>
                            <Image src='/Image/our.jpg' alt=''
                                style={{
                                    width: "100%", maxHeight: "100%", borderRadius: "3px",
                                    boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.1)"
                                }}
                                fluid /></Col>
                    </Row>
                    <Contact clients={clients} />
                    <Row className='shadow-xl  py-5'
                        style={{
                            backgroundImage: "url('/Image/blue.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundColor:"#FFFF"
                        }}>
                        <h2 className='text-center'> My Awesome Services</h2>
                        <p className='text-center '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, unde!</p>
                        <Col md className='mb-4 d-flex px-0 py-3'>
                            <Card className='card-clip1'
                                style={{
                                    backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.514)), url('Image/Ser1 (3).jpeg')"
                                }} >
                                <CardBody className='text-light'>
                                    <CardTitle>
                                        <h1 className='fw-bold'>Innovative Web Design</h1>
                                    </CardTitle>
                                    <CardText>
                                        <h4 className='fw-bold text-center'>Crafting Exceptional Web
                                            Experiences</h4>
                                        <p className='sm'>Welcome to razObyte, your partner in
                                            exceptional web design solutions. We
                                            are a team of passionate designers
                                            and developers who believe in the
                                            power of captivating web experiences.</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className='card-clip2'
                                style={{
                                    backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.514)), url('Image/up1 (2).jpeg')"
                                }} >
                                <CardBody className='text-light'>
                                    <CardTitle>
                                        <h1 className='fw-bold text-center' >Ecommerce Solutions</h1>
                                    </CardTitle>
                                    <CardText>
                                        <h4 className='fw-bold text-center'>Crafting Exceptional Web
                                            Experiences</h4>
                                        <p className='sm'>Welcome to razObyte, your partner in
                                            exceptional web design solutions. We
                                            are a team of passionate designers
                                            and developers who believe in the
                                            power of captivating web experiences.</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className='card-clip3'
                                style={{
                                    backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.514)), url('Image/Ser1 (1).jpeg')"
                                }} >
                                <CardBody className='text-light '>
                                    <CardTitle>
                                        <h1 className='fw-bold text-center' >Search Engine Optimization</h1>
                                    </CardTitle>
                                    <CardText>
                                        <h4 className='fw-bold'>Crafting Exceptional Web
                                            Experiences</h4>
                                        <p className='sm'>Welcome to razObyte, your partner in
                                            exceptional web design solutions. We
                                            are a team of passionate designers
                                            and developers who believe in the
                                            power of captivating web experiences.</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className='card-clip4'
                                style={{
                                    backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.514)), url('Image/up1 (1).jpeg')"
                                }} >
                                <CardBody className='text-light '>
                                    <CardTitle>
                                        <h1 className='fw-bold' >GOOGLE LOCAL LISTING</h1>
                                    </CardTitle>
                                    <CardText>
                                        <h4 className='fw-bold text-center'>Crafting Exceptional Web
                                            Experiences</h4>
                                        <p className='sm '>Welcome to razObyte, your partner in
                                            exceptional web design solutions. We
                                            are a team of passionate designers
                                            and developers who believe in the
                                            power of captivating web experiences.</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className='card-clip5'
                                style={{
                                    backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.514)), url('Image/Ser1 (4).jpeg')"
                                }} >
                                <CardBody className='text-light'>
                                    <CardTitle>
                                        <h1 className='fw-bold ' >GOOGLE ADWORDS</h1>
                                    </CardTitle>
                                    <CardText>
                                        <h4 className='fw-bold text-center'>Crafting Exceptional Web
                                            Experiences</h4>
                                        <p className='sm '>Welcome to razObyte, your partner in
                                            exceptional web design solutions. We
                                            are a team of passionate designers
                                            and developers who believe in the
                                            power of captivating web experiences.</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center flex-wrap  py-5'
                        style=
                        {{
                            backgroundImage: "url('Image/Rectangle 51 (1).png')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                        <div className='text-center py-3 text-light'>
                            <h2 className='hed2 '>Our Clients</h2>
                            <p className='sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, a!</p>
                        </div>
                        <Col>
                            <Marquee>
                                <div className='allclients'>
                                    <div className='m-1 flex space-x-5 p-4' >
                                        <img src="https://razobyte.com/wp-content/uploads/2019/04/image005-300x200.jpg" alt=" hello" className='img-fluid' />
                                    </div>
                                    <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                        <img src="https://razobyte.com/wp-content/uploads/2019/04/image004-300x200.jpg" alt="" className='img-fluid' />
                                    </div>
                                    <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                        <img src="https://razobyte.com/wp-content/uploads/2019/04/galuku_logo-300x200.jpg" alt="" className='img-fluid' />
                                    </div>
                                    <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                        <img src="https://razobyte.com/wp-content/uploads/2019/04/ohreco-300x200.jpg" alt="" className='img-fluid' />

                                    </div>
                                    <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                        <img src="https://razobyte.com/wp-content/uploads/2019/04/image009-300x200.jpg" alt="" className='img-fluid' />
                                    </div>
                                    <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                        <img src="https://razobyte.com/wp-content/uploads/2019/04/yes-creation-1-300x200.png" alt="" className='img-fluid' />
                                    </div>
                                </div>

                            </Marquee>
                            <Marquee autoFill pauseOnClick direction='right'>
                                <div className='allclients'>
                                    <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                        <img src="https://razobyte.com/wp-content/uploads/2019/04/image008-300x200.jpg" alt="" className='img-fluid' />
                                    </div>
                                    <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                        <img src="https://razobyte.com/wp-content/uploads/2019/04/image007-300x200.jpg" alt="" className='img-fluid' />
                                    </div>
                                    <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                        <img src="https://razobyte.com/wp-content/uploads/2019/04/image006-300x200.jpg" alt="" className='img-fluid' />
                                    </div>
                                    <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                        <img src="https://razobyte.com/wp-content/uploads/2019/04/avon-logo-300x200.jpg" alt="" className='img-fluid' />
                                    </div>
                                    <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                        <img src="https://razobyte.com/wp-content/uploads/2019/04/astro-logo-300x200.jpg" alt="" className='img-fluid' />
                                    </div>
                                    <div className='m-1 rounded-xl flex space-x-5 p-4'>
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
                    <Testominials/>

                   
                    <Blog2 />
                    <Port/>
               
                    </ScrollTrigger>
              
             

    







        </>

    )
}