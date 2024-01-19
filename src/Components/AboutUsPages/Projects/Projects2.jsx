
import { Row, Col, Card, CardBody, Carousel } from 'react-bootstrap'
import '../../AboutUsPages/Projects/Projects.css';
export default function Testominials() {
    return (
        <Row className='py-5 justify-content-center'   style={{backgroundImage:"url('Image/grey.png')",backgroundRepeat:"no-repeat",
        backgroundSize:"55%",backgroundPosition:"right"}}>
            <div className='text-center projects-hed1'>
                <h4>Tow Web Design Projects</h4>
                <p className='sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, consequuntur.</p>
            </div>
            <Col md={12} className='d-flex justify-content-center align-items-center projectsindictaors' >
                <Carousel indicators={true}>
                    <Carousel.Item>
                        <Row className='justify-content-center align-items-center'>
                            <Col md={5} className='py-3 d-flex justify-content-center align-items-center'>
                                <div className='img-1-style'>
                                    <h3>King Clean</h3>
                                    <img src="Image/King-Clean.png" alt="" className='img-fluid' style={{ height: "70vh", width: "650px" }} />

                                </div>
                            </Col>
                            <Col md={4} className='py-3 d-flex justify-content-center align-items-center'>
                                <div className='img-1-style2' >
                                    <h3>MDRc</h3>
                                    <img src="Image/Ab-7.png" alt="" className='img-fluid' style={{ height: "70vh", width: "650px" }} />

                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className='align-items-center justify-content-center py-3'>
                            <Col md={5} className='py-3 d-flex justify-content-center align-items-center'>
                                <div className="img-1-style">
                                    <h3>King Clean</h3>
                                    <img src="Image/King-Clean.png" alt="" className='img-fluid' style={{ height: "70vh", width: "650px" }} />
                                </div>
                            </Col>
                            <Col md={4} className='py-3 d-flex justify-content-center align-items-center'>
                                <div className='img-1-style2'>
                                    <h3>MDRC</h3>
                                    <img src="Image/Ab-6.jpg" alt="" className='img-fluid' style={{ height: "70vh", width: "650px" }} />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>

    )
}