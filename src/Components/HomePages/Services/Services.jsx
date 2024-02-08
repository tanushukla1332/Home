import { Row, Col, Card, CardBody, CardText, CardTitle, Button } from 'react-bootstrap';
import '../Services/Services.css'



export default function Services() {
    return (
        <>
            <Row className='justify-content-center align-items-center py-2  px-0'
                style={{
                    backgroundColor: "#FFFF"
                }}>
                <h2 className='hed2 text-center'>Our Awesome Services</h2>
                <p className='subheading-sections'>Dive into the excellence  </p>
                <Col md={12}>
                    <div className='d-flex flex-column flex-md-row px-0 justify-content-center align-items-center'>
                        <Card className='card-clip'
                            style={{
                                backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.514)), url('Image/Ser1 (3).jpeg')"
                            }} >
                            <CardBody className='text-light'>
                                <CardTitle>
                                    <h1 className='fw-bold text-center'>Innovative Web Design</h1>
                                </CardTitle>
                                <CardText>
                                    <h4 className='fw-bold text-center'>Crafting Exceptional Web
                                        Experiences</h4>
                                    <p>Welcome to razObyte, your partner in
                                        exceptional web design solutions. We
                                        are a team of passionate designers
                                        and developers who believe in the
                                        power of captivating web experiences.</p>
                                </CardText>
                            </CardBody>
                        </Card>
                        <Card className='card-clip'
                            style={{
                                backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.514)), url('Image/up1 (2).jpeg')"
                            }} >
                            <CardBody className='text-light'>
                                <CardTitle>
                                    <h1 className='fw-bold text-center' >Ecommerce Solutions</h1>
                                </CardTitle>
                                <CardText>
                                    <h4 className='fw-bold text-center'>Crafting Exceptional Web
                                        Experiences</h4>
                                    <p>Welcome to razObyte, your partner in
                                        exceptional web design solutions. We
                                        are a team of passionate designers
                                        and developers who believe in the
                                        power of captivating web experiences.</p>
                                </CardText>
                            </CardBody>
                        </Card>
                        <Card className='card-clip'
                            style={{
                                backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.514)), url('Image/Ser1 (1).jpeg')"
                            }} >
                            <CardBody className='text-light '>
                                <CardTitle>
                                    <h1 className='fw-bold text-center'>Search Engine Optimization</h1>
                                </CardTitle>
                                <CardText>
                                    <h4 className='fw-bold text-center'>Crafting Exceptional Web
                                        Experiences</h4>
                                    <p >Welcome to razObyte, your partner in
                                        exceptional web design solutions. We
                                        are a team of passionate designers
                                        and developers who believe in the
                                        power of captivating web experiences.</p>
                                </CardText>
                            </CardBody>
                        </Card>
                        <Card className='card-clip'
                            style={{
                                backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.514)), url('Image/up1 (1).jpeg')"
                            }} >
                            <CardBody className='text-light '>
                                <CardTitle>
                                    <h1 className='fw-bold' >GOOGLE LOCAL LISTING</h1>
                                </CardTitle>
                                <CardText>
                                    <h4 className='fw-bold text-center'>Crafting Exceptional Web
                                        Experiences</h4>
                                    <p>Welcome to razObyte, your partner in
                                        exceptional web design solutions. We
                                        are a team of passionate designers
                                        and developers who believe in the
                                        power of captivating web experiences.</p>
                                </CardText>
                            </CardBody>
                        </Card>
                        <Card className='card-clip'
                            style={{
                                backgroundImage: "linear-gradient(45deg, rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.514)), url('Image/Ser1 (4).jpeg')"
                            }} >
                            <CardBody className='text-light'>
                                <CardTitle>
                                    <h1 className='fw-bold '>GOOGLE ADWORDS</h1>
                                </CardTitle>
                                <CardText>
                                    <h4 className='fw-bold text-center'>Crafting Exceptional Web
                                        Experiences</h4>
                                    <p>Welcome to razObyte, your partner in
                                        exceptional web design solutions. We
                                        are a team of passionate designers
                                        and developers who believe in the
                                        power of captivating web experiences.</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='d-flex justify-content-center align-items-center pt-2'>
                    </div>


                </Col>

            </Row>
        </>
    )
}
