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
                <Col md className='p-0'>;
                    <img src="Image/Ab-1 (2).png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Count clients={clients} />
            <Sections />
            <Projects />
            <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center'>
                <Col md={12} className='lastheader' >
                    <p className='py-2'>Interested in a little more details, let us know how we can assist you Button</p>
                    <Button variant='dark' className='py-2 btn-last-banner-contact-Us'>Contact-us</Button>
                </Col>
            </Row>
        </ScrollTrigger>







    )
}