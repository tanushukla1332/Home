import Banner from "./CarrerBanner/Banner";
import CarSection from "./SectionsCar/SectionsCar";
import {Row,Col,Button} from 'react-bootstrap'

export default function Career(){
    return(
        <>
        <Banner/>
        <CarSection/>
     
    <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center align-items-center'>
    <Col md={10} className='flex items-center justify-center gap-5 py-3'>
        <p className='para text-white pt-3'>Interested in a little more details, let us know how we can assist you.</p>
        <Button variant='dark' className='btn-last-banner-contact-Us'>Contact-us</Button>
    </Col>
</Row>

        </>
    )
}