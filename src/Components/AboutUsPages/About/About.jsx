import { Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import Count from '../Count/Count';
import ScrollTrigger from 'react-scroll-trigger';
import Sections from '../Sections/Sections';
import Projects from '../Projects/Projects2';
import Testominials from '../../HomePages/Testominals/Testomnials';
import { Helmet } from 'react-helmet';

import '../About/About.css'





export default function About() {
    const [clients, setClients] = useState(false)

    return (
        <>
        <Helmet>
        <title>About Page</title>
        <meta
        name="About page"  content="This is my About  page"   />
         <meta name="keywords"content="About page content" />

        </Helmet>
        


        <ScrollTrigger onEnter={() => setClients(true)} onExit={() => setClients(false)}>
        <Row className='d-md-flex d-none items-center justify-center' style={{backgroundImage
            :"url('Image/Ab-banner.png')",height:"398px",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
                <Col md className='px-0'>;
                  
                    <div  className='flex items-center justify-center'>
                    <h2 className='hed1 text-white'>About page</h2>
                    </div>
                </Col>
            </Row>
            <Row className='d-sm-none d-flex items-center justify-center'>
                <Col md className='px-0'>;
                    <img src="Image/Ab-banner.png" alt="" className='img-fluid' />
                    
                </Col>
            </Row>
            <Count clients={clients}/>
            <Sections />
            <Projects />
            <Testominials/>
            <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center align-items-center mt-5'>
                <Col md={12} className='flex items-center justify-center gap-5 py-3'>
                    <p className='para text-white'>Interested in a little more details, let us know how we can assist you Button</p>
                    <Button variant='dark' className='btn-last-banner-contact-Us'>Contact-us</Button>
                </Col>
            </Row>
         
            
        </ScrollTrigger>





        </>
    )
    
}