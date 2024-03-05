import {Row,Col,Button} from 'react-bootstrap';
import Banner from "../Banner/Banner";
import Section from "../SectionContact/Section";
import { Helmet } from 'react-helmet';
export default function Contact(){
    return(
        <>
        <Helmet>
        <title>Contact Page</title>
        <meta
        name="Contact page"
        content="This is my Contact  page"
         />

        </Helmet>
        <Banner/>
        <Section/>
        <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center'>
        <Col md={12} className='lastheader' >
            <p className='py-2'>Interested in a little more details, let us know how we can assist you Button</p>
            <Button variant='dark' className='py-2 btn-last-banner-contact-Us'>Contact-us</Button>
        </Col>
    </Row>

       
        </>
    )
}