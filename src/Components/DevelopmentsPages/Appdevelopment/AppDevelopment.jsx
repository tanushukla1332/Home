import Blog from "../../Blog/Blog2";
import Port from "../../HomePages/Port/Port"
import Testominials from "../../HomePages/Testominals/Testomnials"
import Banner from "./Banner/Banner"
import Services from "./DevServices/Services";
import {Row,Col,Button} from 'react-bootstrap'
export default function AppDevelopment(title){
    return(
        <>
        <Banner/>
        <Services/>
        <Testominials/>
        <Port/>
        <Blog title="Blogs"/>
        <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center align-items-center'>
        <Col md={12} className='flex items-center justify-center gap-5 py-3'>
            <p className='para text-white'>Interested in a little more details, let us know how we can assist you Button</p>
            <Button variant='dark' className='btn-last-banner-contact-Us'>Contact-us</Button>
        </Col>
    </Row>
        </>
    )
}