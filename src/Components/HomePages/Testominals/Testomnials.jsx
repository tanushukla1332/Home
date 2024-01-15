
import {Row,Col,Card,CardBody,Carousel,CardImg,CardTitle,CardText} from 'react-bootstrap'
import '../Testominals/Testomnials.css';
export default function Testominials(){
    return(
        <Row className='py-5 justify-content-center align-items-center' style={{ backgroundColor: "#FFFF"}}>
        <div className='text-center '>
            <h3>TESTIMONIALS</h3>
            <p className='sm '>Don’t Go only with our commitments : Here what our clients says about us:</p>
        </div>
        <Col md={12} className='d-md-flex justify-content-center align-items-center' >
            <Carousel indicators={true}  >
                <Carousel.Item>
                    <Row className='justify-content-center align-items-center'>
                        <Col md={5} className='py-3 d-flex justify-content-center align-items-center'>
                            <Card className='card-main-Testominals'>
                                <CardImg variant="top" src='Image/third.png' fluid style={{ maxHeight: '150px', maxWidth: "150px", borderRadius: "50%", marginTop: "5px", padding: "16px" }} />
                                <CardBody>
                                    <CardTitle>
                                        <div className='review'>
                                            <h4>Alvin Hong</h4>
                                            <h5>Sales manager</h5>
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                        </div>
                                        <div>
                                            <img src="Image/inverted-commas 1.png" alt="" className='img-fluid' />

                                        </div>
                                    </CardTitle>
                                    <CardText>
                                        <p className='sm text-light'>TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={5} className='py-3 d-md-flex justify-content-center align-items-center'>
                            <Card className='card-main-Testominals'>
                                <CardImg variant="top" src='Image/Raseo-Technology-Solutions.jpg' fluid style={{ maxHeight: '150px', maxWidth: "150px", borderRadius: "50%", padding: "16px", marginTop: "5px" }} />
                                <CardBody>
                                    <CardTitle>
                                        <div className='review'>
                                            <h4>Eunice Yong</h4>
                                            <h5>Director</h5>
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                        </div>
                                        <div>
                                            <img src="Image/inverted-commas 1.png" alt="" className='img-fluid' />

                                        </div>
                                    </CardTitle>
                                    <CardText>
                                        <p className='sm text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className='align-items-center justify-content-center py-3'>
                        <Col md={5} className='py-3 d-md-flex justify-content-center align-items-center'>
                            <Card className='card-main-Testominals'>
                                <CardImg variant="top" src='Image/Eric-yong.jpg' fluid style={{ maxHeight: '150px', maxWidth: "150px", borderRadius: "50%", marginTop: "5px", padding: "16px" }} />
                                <CardBody >
                                    <CardTitle>
                                        <div className='review'>
                                            <h4>Eric Lim</h4>
                                            <h5>Owner</h5>
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                        </div>
                                        <div>
                                            <img src="Image/inverted-commas 1.png" alt="" className='img-fluid' />

                                        </div>
                                    </CardTitle>

                                    <CardText>
                                        <p className='sm text-light'>TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </CardText>
                                </CardBody>

                            </Card>
                        </Col>
                        <Col md={5} className='py-3 d-md-flex justify-content-center align-items-center'>
                            <Card className='card-main-Testominals'>
                                <CardImg variant="top" src='Image/Eric-yong.jpg' fluid style={{ maxHeight: '150px', maxWidth: "150px", borderRadius: "50%", marginTop: "5px", padding: "16px" }} />
                                <CardBody >
                                    <CardTitle>
                                        <div className='review'>
                                            <h4>Eric Lim</h4>

                                            <h5>Owner</h5>
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                            <img src="Image/star 3.png" alt="" className='img-fluid' />
                                        </div>
                                        <div>
                                            <img src="Image/inverted-commas 1.png" alt="" className='img-fluid' />

                                        </div>

                                    </CardTitle>

                                    <CardText>
                                        <p className='sm text-light' >TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </CardText>
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </Col>
    </Row>

    )
}