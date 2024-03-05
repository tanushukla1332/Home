
import {Row,Col} from 'react-bootstrap'


export default function Sections(){
    return(
        <>
        <Row className='justify-content-center align-items-center py-5'>
        <Col md={10}>
        <div className='pb-5'> 
        <h3 className='hed3 text-center'>Building what the world needs</h3>
        <p className='para'>With the blend of great minds, we at Razobyte are driven to improve the world. We build technology that the world needs before they know they need 
        it.  As a leading solutions company, we have been at the forefront of delivering comprehensive IT solutions and digital marketing services to businesses 
        worldwide.
        </p>
        <span className='para'> With 8+ years of experience in measuring the landscape of every industry and a passion for technology, our team has successfully provided IT 
        solutions and marketing strategies to clients all around the globe.</span>
        </div>
        <div className='d-md-flex justify-content-center align-items-center'>
        <img src="Image/Ab-2.png" alt="" className='img-fluid d-md-flex justify-content-center align-items-center' />
        </div>

        </Col>
        </Row>
        <Row className='justify-content-center py-5 align-items-center
        '>
        <Col md={10}>
        <div className='pb-5'>
        <h3 className='hed3 text-center'>What we provide</h3>
       
        <p className='para'>For the past 8 years, RazoByte has been dedicated to providing exceptional IT services, including IT infrastructure management, network 
        administration, cybersecurity, system integration, and cloud solutions. Our expertise ensures that your technology infrastructure is robust, secure, and 
        optimized for performance</p>
        </div>
        <div className='d-md-flex justify-content-center align-items-center'>
        <img src="Image/Ab-3.png" alt="" className='img-fluid d-md-flex justify-content-center align-items-center' />
        </div>

        </Col>
        </Row>
        <Row className='justify-content-center py-5 align-items-center'
        style={{backgroundImage:"url('Image/blue.png')",backgroundRepeat:"no-repeat",
    backgroundSize:"55%",backgroundPosition:"left"}}>
        <Col md={10}>
        <div className='pb-5'>
        <h3 className='text-center hed3'>Digital Marketing Solutions</h3>
        <p className='para'>
        We offer a complete suite of digital marketing solutions designed to enhance your online presence, increase brand visibility, and drive business growth. 
        Our digital marketing experts specialize in website design, mobile app development, search engine optimization (SEO), social media marketing, 
        content creation, and more.
        </p>
        </div>
        <div className='d-md-flex justify-content-center align-items-center'>
        <img src="Image/Ab-4.png" alt="" className='img-fluid' />
        </div>

        </Col>
        </Row>
        <Row className='justify-content-center py-5 align-items-center'>
        <Col md={10}>
        <div  className='pb-5'>
        <h3 className='hed3 text-center'>Design Services</h3>
        <p className='para text-center'>With a creative team of designers with a vast portfolio of design, including UX/UI, Printing designs, Social media posts, banners, etc. We provide our 
        clients a one-stop solution for all their design requirements.
        </p>
        <span className='para text-center'> Join the ranks of our satisfied clients who have experienced the transformative power of our IT solutions and digital marketing services. Let RazoByte 
        be your trusted partner in navigating the digital landscape and achieving unparalleled success.</span>
        </div>
        <div className='d-md-flex justify-content-center align-items-center' >
        <img src="Image/Ab-5.png" alt="" className='img-fluid d-md-flex justify-content-center align-items-center' />
        </div>

        </Col>
        </Row>
        </>
        
    )

}