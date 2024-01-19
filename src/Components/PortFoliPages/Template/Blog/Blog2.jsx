import React, { useState } from 'react';
import { Row, Col, CardImg, CardBody, CardTitle, Card, Button, Carousel, CarouselItem } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import '../Blog/Blog.css';
import blogsData from './BlogsData.json'


export default function Blog() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

    
    return (
        <>
            <Row className='justify-content-center align-items-center mb-5' style=
            {{backgroundImage:"url('/Image/bannerfnjf.png')",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundColor:"ffffff52"
        }}>
                <div className='text-center text-light py-5'>
                    <h3>Blogs</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, optio?</p>
                </div>
                <Col md={12} className='pb-5 d-flex justify-content-center'>
                    <Carousel indicators   activeIndex={index} onSelect={handleSelect}>
                        {blogsData.map((data, id) => (
                            <CarouselItem key={id} >
                            <Row className='d-flex justify-content-center'>
                            <Col md={3} className='d-flex justify-content-center'>
                            <Card className='cardmain d-flex justify-content-center'>
                                    <CardImg src={data.image} variant='top' fluid className='card-img' />
                                    <CardBody>
                                        <CardTitle>
                                            <div className='allcardData'>
                                                <h3>{data.title}</h3>
                                                <h6 className='d-flex align-items-center gap-2'>
                                                    <FaUser color='white' className='rounded-5' size={22}
                                                        style={{ backgroundColor: "#3B7FBF", padding: "5px" }}
                                                    />
                                                    <span> {data.author}</span>
                                                </h6>
                                                <p>{data.content}</p>
                                                <Button className='read-more-btn'>Read more</Button>
                                            </div>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3} className='d-flex justify-content-center'>
                            <Card className='cardmain d-flex justify-content-center'>
                                    <CardImg src={data.image} variant='top' fluid className='card-img' />
                                    <CardBody>
                                        <CardTitle>
                                            <div className='allcardData'>
                                                <h3>{data.title}</h3>
                                                <h6 className='d-flex align-items-center gap-2'>
                                                    <FaUser color='white' className='rounded-5' size={22}
                                                        style={{ backgroundColor: "#3B7FBF", padding: "5px" }}
                                                    />
                                                    <span> {data.author}</span>
                                                </h6>
                                                <p>{data.content}</p>
                                                <Button className='read-more-btn'>Read more</Button>
                                            </div>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3} className='d-flex justify-content-center'>
                            <Card className='cardmain d-flex justify-content-center align-items-center' >
                                    <CardImg src={data.image} variant='top' fluid className='card-img' />
                                    <CardBody>
                                        <CardTitle>
                                            <div className='allcardData'>
                                                <h3>{data.title}</h3>
                                                <h6 className='d-flex align-items-center gap-2'>
                                                    <FaUser color='white' className='rounded-5' size={22}
                                                        style={{ backgroundColor: "#3B7FBF", padding: "5px" }}
                                                    />
                                                    <span> {data.author}</span>
                                                </h6>
                                                <p>{data.content}</p>
                                                <Button className='read-more-btn'>Read more</Button>
                                            </div>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        
                            
                            </Row>
                              
                            </CarouselItem>
                            
                        ))}
                        
                    </Carousel>
                
                </Col>
                    <Button className='explore-btn-port mb-5'>Explore all blogs</Button>
            </Row>
        </>
    );
}
