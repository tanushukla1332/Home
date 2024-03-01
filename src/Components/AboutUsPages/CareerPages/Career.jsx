import Banner from "./CarrerBanner/Banner";
import CarSection from "./SectionsCar/SectionsCar";
import {Row,Col,Button} from 'react-bootstrap'

export default function Career(){
    return(
        <>
        <Banner/>
        <CarSection/>
        <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center'>
        <Col md={12} className='lastheader py-2'>
            <p className='py-2'>Interested in a little more details, let us know how we can assist you Button</p>
            <Button variant='dark' className='py-2 btn-last-banner-contact-Us'>Contact-us</Button>
        </Col>
    </Row>

        </>
    )
}