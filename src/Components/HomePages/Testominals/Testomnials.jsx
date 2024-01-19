
import { Row, Col, Card, CardBody, Carousel, CardImg, CardTitle, CardText } from 'react-bootstrap'
import '../Testominals/Testomnials.css';
export default function Testominials() {
    return (
        <Row className='py-5 justify-content-center align-items-center' style={{
            backgroundColor: "#3B7FBF"

        }}>
            <div className='text-center '>
                <h3 className='hed2 text-light'>TESTIMONIALS</h3>
                <p className='testpara text-light'>Don’t Go only with our commitments : Here what our clients says about us:</p>
            </div>
            <Col md={12} className='d-md-flex justify-content-center align-items-center testominialsindicators' >
                <Carousel indicators={true}>
                    <Carousel.Item>
                        <Row className='justify-content-center align-items-center'>
                            <Col md={5} className='py-3 d-md-flex justify-content-center align-items-center'>
                                <Card className='card-main-Testominals'>
                                    <CardBody>
                                        <CardTitle>
                                            <div className="cardinnerdata">
                                                <div className='review'>
                                                    <h4>Lalit Kumar</h4>
                                                    <h5>Chief Executive Officer</h5>
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                </div>
                                                <div className='card-img-testominials'>
                                                    <CardImg src='Image/Rectangle 181.png' fluid
                                                    />
                                                </div>

                                            </div>
                                           

                                        </CardTitle>
                                        <CardText>
                                        <div>
                                        <img src="Image/inverted-commas 1.png" alt="" className='img-fluid'  style={{width:"2opx",height:"20px"}}/>
                                    </div>
                                            <p className='testpara'>TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={5} className='py-3 d-md-flex justify-content-center d-none align-items-center'>
                                <Card className='card-main-Testominals'>
                                    <CardBody>
                                        <CardTitle>
                                            <div className="cardinnerdata">
                                                <div className='review'>
                                                    <h4>Eunice Yong</h4>

                                                    <h5>Chief Executive Officer</h5>
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                </div>
                                                <div className='card-img-testominials'>
                                                    <CardImg src='Image/Raseo-Technology-Solutions.jpg' fluid
                                                    />
                                                </div>

                                            </div>
                                           
                                        </CardTitle>
                                        <CardText>
                                        <div>
                                        <img src="Image/inverted-commas 1.png" alt="" className='img-fluid'  style={{width:"2opx",height:"20px"}}/>
                                    </div>
                                            <p className='testpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                                    <CardBody >
                                        <CardTitle>
                                            <div className="cardinnerdata">
                                                <div className='review'>
                                                    <h4>Eric Lim</h4>
                                                    <h5>Chief Executive Officer</h5>
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                </div>
                                                <div className='card-img-testominials'>
                                                    <CardImg src='Image/Eric-yong.jpg' fluid
                                                    />
                                                </div>

                                            </div>

                                        </CardTitle>


                                        <CardText>
                                            <div>
                                                <img src="Image/inverted-commas 1.png" alt="" className='img-fluid' style={{width:"2opx",height:"20px"}} />
                                            </div>
                                            <p className='testpara'>TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </CardText>
                                    </CardBody>

                                </Card>
                            </Col>
                            <Col md={5} className='py-3 d-md-flex d-none justify-content-center align-items-center'>
                                <Card className='card-main-Testominals'>
                                    <CardBody >

                                        <CardTitle>
                                            <div className="cardinnerdata">
                                                <div className='review'>
                                                    <h4>Eric Lim</h4>
                                                    <h5>Chief Executive Officer</h5>
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                </div>
                                                <div className='card-img-testominials'>
                                                    <CardImg src='Image/Eric-yong.jpg' fluid
                                                    />
                                                </div>

                                            </div>
                                           

                                        </CardTitle>


                                        <CardText>
                                        <div>
                                        <img src="Image/inverted-commas 1.png" alt="" className='img-fluid'  style={{width:"20px",height:"20px"}} />
                                    </div>
                                            <p className='testpara' >TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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