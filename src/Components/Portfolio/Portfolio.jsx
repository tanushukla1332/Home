import React, { useState } from 'react';
import { Row, Col, Card, CardBody, CardImg, CardTitle, CardText, Button } from 'react-bootstrap';
import '../Portfolio/Portfolio.css';
import Port from '../Portfolio/Port';
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Portfolio() {
    const [visiblePort, setVisiblePort] = useState(2);

    const handleButtonClick = (newVisiblePort) => {
        setVisiblePort(newVisiblePort);
    };
    return (
        <>
            <Row className='my-5' 
            style={{backgroundImage:"url('/Image/gfg2.png')",
            backgroundRepeat:"no-repeat",
            backgroundSize:"50%",
            backgroundPosition:"center"

            

            
        }}>
                <div className='text-center'>
                    <h3>Portfolio</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className={`AllbuttonForMove port-text ${visiblePort === 2 ? '' : 'slide'}`} >
                    {Port.slice(0, visiblePort).map((item) => (
                        <Col key={item.id} md={6}>
                            <div className='port-text'>
                                <Card className='card-portfolio-main'>
                                    <CardBody>
                                        <FaExternalLinkAlt className='icon-link' size={45} color='#3B7FBF' />
                                        <CardImg src={item.image} alt="" className='img-fluid d-flex'
                                            style={{
                                                maxWidth: "550px",
                                                minHeight: "350px",
                                                padding: "16px",
                                                objectFit: "cover",
                                                opacity: "0.9",
                                            }}
                                        />
                                        <CardTitle><h4>{item.title}</h4></CardTitle>
                                        <CardText>
                                            <h6>{item.subTitle}</h6>

                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    ))}
                </div>
                <div className='AllbuttonForMove'>
                    <Button onClick={() => handleButtonClick(2)}>1</Button>
                    <Button onClick={() => handleButtonClick(4)}>2</Button>
                    <Button onClick={() => handleButtonClick(6)}>3</Button>
                </div>
            </Row>
        </>
    );
}
