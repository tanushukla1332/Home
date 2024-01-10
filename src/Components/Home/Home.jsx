import Container from 'react-bootstrap/Container';
import Footer from '../Footer/Fotter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Button, CardBody, CardImg, CardText, CardTitle, CarouselCaption, CarouselItem, Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import Data from '../../Data.json';
import '../Home/Home.css';
import Blog2 from '../Blog/Blog2';
import ScrollTrigger from 'react-scroll-trigger'
import Contact from '../Contact/Contact';
import Port from '../Portfolio/Portfolio';
import Banner from '../Bannerpage/Banner';
import Count from '../Count/Count';


export default function Home() {
    const [currentTitle, setCurrentTitle] = useState(0)
    const [subheading, setSubheading] = useState(0)
    const [paras, setParas] = useState(0)
    const [Allimagess, setAllImage] = useState(0)
    const[clients,setClients]=useState(false)
   

    const titles = Data.map((data) => data.title)
    const subtitles = Data.map((data) => data.subTitle)
    const paragraphs = Data.map((data) => data.paragraph)
    const allimages = Data.map((data) => data.image)

    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length)
            setSubheading((prev) => (prev + 1) % subtitles.length)
            setParas((prev) => (prev + 1) % paragraphs.length)
            setAllImage((prev) => (prev + 1) % allimages.length)
        }, 3000)
        return () => clearInterval(intervalId)
    }, [titles.length,subtitles.length,paragraphs.length,allimages.length])
    return (

        <>
        
        <ScrollTrigger onEnter={()=>setClients(true)} onExit={()=>setClients(false)}>
        <Container fluid >
       
        <Row className='py-3'  style={{backgroundColor:"#3B7FBF"}}>
       
            <Col className='text-light'>
                <h1 className='hed1  mt-5 '>{titles[currentTitle]} </h1>
                <h3 className=' hed3 '>{subtitles[subheading]}
                </h3>
                <p className=' sm '>{paragraphs[paras]}</p>
                <Button className=" btm mr-5" variant='dark'>Get in touch </Button>
                <Button variant='dark' className=" btm mr-5 my-3">About Us</Button>
            </Col>
            <Col md={7} className='mt-2'>
                <Image src={allimages[Allimagess]} alt='' fluid
                    className='rounded-1' style={{ width: "100%", height: "500px" }}
                />
            </Col>
        </Row>
        <Count clients={clients}/>
        <Row className=' d-none d-sm-flex justify-content-evenly my-5'>
            <Col md={6} className=' px-1  py-3 '>
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
     
        
        <Row className='d-block d-sm-none  justify-content-evenly my-5'>
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
        <Contact clients={clients}/>
        <Row className='shadow-xl '>
            <h2 className='text-center  pt-5'> My Awesome Services</h2>
            <p className='text-center  '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, unde!</p>
            <Col md className='mb-4 d-flex px-0 py-5'>
                <Card className='card-clip1'
                    style={{
                        backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.514)), url('Image/Ser1 (3).jpeg')"
                    }} >
                    <CardBody  className='text-light'>
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
                    <CardBody  className='text-light'>
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
        <Row className='d-flex justify-content-center flex-wrap mb-4 py-5' 
        style=
        {{backgroundImage:"url('Image/Rectangle 51 (1).png')",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center"
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

        <Row className='my-5 py-5' style={{backgroundColor:"#3B7FBF"}}>
            <div className='text-center'>
                <h3>TESTIMONIALS</h3>
                <p className='sm'>Don’t Go only with our commitments : Here what our clients says about us:</p>
            </div>
            <Col md={12} className='d-flex justify-content-center align-items-center'>
                <Carousel indicators={true} >
                    <Carousel.Item>
                        <Row className='justify-content-center align-items-center'>
                            <Col md={5} className='py-3 d-flex justify-content-center align-items-center'>
                                <Card className='card-main-Testominals'>
                                    <CardImg variant="top" src='Image/third.png' fluid style={{ maxHeight: '100px', maxWidth: "100px", borderRadius: "50%",marginTop: "5px" ,padding:"16px"}} />
                                    <CardBody>
                                        <CardTitle>
                                            <div className='review'>
                                                <h4>Alvin Hong</h4>
                                                <h5>Sales manager</h5>
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            </div>
                                        </CardTitle>
                                        <CardText>
                                            <p className='sm text-light'>The SEO and PPC service have been fantastically executed and delivered the Top ranking of my website. All the best</p>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={5} className='py-3 d-flex justify-content-center align-items-center'>
                                <Card className='card-main-Testominals'>
                                    <CardImg variant="top" src='Image/Raseo-Technology-Solutions.jpg' fluid style={{ maxHeight: '100px', maxWidth: "100px", borderRadius: "50%",  padding:"16px" ,marginTop: "5px" }} />
                                    <CardBody>
                                        <CardTitle>
                                            <div className='review'>
                                                <h4>Eunice Yong</h4>
                                                <h5>Director</h5>
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            </div>
                                        </CardTitle>
                                        <CardText>
                                            <p className='sm text-light'>They have been very good to boost my business through SEO campaign and Google adwords, thanks</p>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className='align-items-center justify-content-center py-3'>
                            <Col md={5} className='py-3 d-flex justify-content-center align-items-center'>
                                <Card className='card-main-Testominals'>
                                    <CardImg variant="top" src='Image/Eric-yong.jpg' fluid style={{ maxHeight: '100px', maxWidth: "100px", borderRadius: "50%", marginTop: "5px" ,padding:"16px"}} />
                                    <CardBody >
                                        <CardTitle>
                                            <div className='review'>
                                                <h4>Eric Lim</h4>

                                                <h5>Owner</h5>
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            </div>
                                        </CardTitle>

                                        <CardText>
                                            <p className='sm text-light'>They are at their words in terms of providing service and support!! all the best.</p>
                                        </CardText>
                                    </CardBody>

                                </Card>
                            </Col>
                            <Col md={5} className='py-3 d-flex justify-content-center align-items-center'>
                                <Card className='card-main-Testominals'>
                                    <CardImg variant="top" src='Image/Eric-yong.jpg' fluid style={{ maxHeight: '100px', maxWidth: "100px", borderRadius: "50%", marginTop: "5px",padding:"16px" }} />
                                    <CardBody >
                                        <CardTitle>
                                            <div className='review'>
                                                <h4>Eric Lim</h4>

                                                <h5>Owner</h5>
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            </div>
                                        </CardTitle>

                                        <CardText>
                                            <p className='sm text-light' >They are at their words in terms of providing service and support!! all the best.</p>
                                        </CardText>
                                    </CardBody>

                                </Card>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        <Blog2 />
        <Port/>
        <Footer />

    </Container >

        </ScrollTrigger>
           






        </>

    )
}