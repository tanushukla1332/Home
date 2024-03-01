
import { Row, Col, Button } from 'react-bootstrap';
import '../Banner/Banner.css';

export default function Banner() {
    return (
        <>
            <Row>
                <Col md className='px-0 '>
                    <div className='main-heading'>
                    <h1>Ecommerce Solutions</h1>
                    </div>
                     
                    <div>
                        <img src="/Image/logo-Banner.png" alt="" className='img-fluid'
                            style={{ backgroundRepeat: "no-repeat", width: "100%" }} />
                    </div>

                </Col>
            </Row>
            <Row style={{ backgroundColor: "#5e5e5e" }}  className='justify-content-center align-items-center'>
                <Col md={10} className='d-md-flex justify-content-center align-items-center py-lg-3 fw-bold For-gap text-light' style={{letterSpacing:"2px"}}>
                
                
   
                    <p className='my-2'>Become the trendsetter of your industry</p>
                    <Button variant='dark' className='my-2 py-2 btn-main-banner-knw-more'>Know More</Button>
                </Col>
            </Row>

        </>
    )
}