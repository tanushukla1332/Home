import { Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import Count from '../Count/Count';
import ScrollTrigger from 'react-scroll-trigger';
import Sections from '../Sections/Sections';
import Projects from '../Projects/Projects2';

import '../About/About.css'





export default function About() {
    const [clients, setClients] = useState(false)

    return (


        <ScrollTrigger onEnter={() => setClients(true)} onExit={() => setClients(false)}>

            <Row>
                <Col md className='p-0'>
                    <img src="Image/Ab-1 (2).png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Count clients={clients} />
            <Sections />
            <Projects />
       
            <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center gap-5'>
                <Col md={12} className='d-md-flex justify-content-center align-items-center py-lg-3 fw-bold  text-light' style={{ letterSpacing: "2px",gap:"150px" }}>
                    <p className='my-2'>Interested in a little more details, let us know how we can assist you Button</p>
                    <Button variant='dark' className='my-2 py-2 btn-last-banner-contact-Us'>Contact-us</Button>
                </Col>
            </Row>
        </ScrollTrigger>







    )
}