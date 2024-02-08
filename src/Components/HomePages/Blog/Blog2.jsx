import React, { useState } from 'react';
import { Row, Col, CardImg, CardBody, CardTitle, Card, Button, Carousel, CarouselItem } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import '../Blog/Blog.css';
import blogsData from './BlogsData.json';
import { useNavigate } from 'react-router';


export default function Blog() {
    const [index, setIndex] = useState(0);
    const navigate=useNavigate()

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return (
        <>
            <Row className='justify-content-center align-items-center py-4' style=
            {{backgroundImage:"url('/Image/blogbanner.png')",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backgroundPosition:"center"
        }}>
                <div className='text-center text-light'>
                    <h3 className='hed2 '>Blogs</h3>
                    <p className='subheading-sections'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, optio?</p>
                </div>
                <Col md={12} className='pb-3 d-flex justify-content-center align-items-center blogsindicators'>
                    <Carousel indicators   activeIndex={index} onSelect={handleSelect}>
                        {blogsData.map((data, id) => (
                            <CarouselItem key={id} >
                            <Row className='d-flex justify-content-center align-items-center'>
                            <Col md={3} className='d-flex justify-content-center align-items-center '>
                            <Card className='cardmain d-flex justify-content-center align-items-center'>
                                    <CardImg src={data.image} variant='top' fluid className='card-imgblogs2'/>
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
                            <Col md={3} className='d-md-flex d-none  justify-content-center align-items-center'>
                            <Card className='cardmain d-flex justify-content-center align-items-center'>
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
                            <Col md={3} className='d-md-flex d-none justify-content-center align-items-center'>
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
                    <Button className='explore-btn-blog mb-5' onClick={()=>navigate('/blogMain')}>Explore all blogs</Button>
            </Row>
        </>
    );
}
