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
            {{backgroundColor:"white"
           
        }}>
                <div className='text-center text-light'>
                    <h3 className='hed2 '>Blogs</h3>
                    <p className='para'>Take a peak inside our expert’s minds</p>
                </div>
                <Col md={12} className='pb-3 d-flex justify-content-center align-items-center 
                blogsindicators'>
                    <Carousel indicators   activeIndex={index} onSelect={handleSelect}>
                        {blogsData.map((data, id) => (
                            <CarouselItem key={id} >
                            <Row className='d-flex justify-content-center align-items-center'>
                            <Col md={3} className='d-flex justify-content-center align-items-center  my-3'>
                            <Card className=' cardmain-blog2 d-flex justify-content-center align-items-center'>
                                    <CardImg src={data.image} variant='top' fluid className='card-imgblogs2'/>
                                    <CardBody style={{backgroundColor:"#3b7fbf"}}>
                                        <CardTitle>
                                            <div className='allcardData'>
                                                <h3 className='hed3 text-white'>{data.title}</h3>
                                                <h6 className='d-flex align-items-center gap-2 text-white'>
                                                    <FaUser color='#3b7fbf' className='rounded-5' size={22}
                                                        style={{ backgroundColor: "#ffff", padding: "5px" }}
                                                    />
                                                    <span className='text-white'> {data.author}</span>
                                                </h6>
                                                <p className='text-white'>{data.content}</p>
                                                <Button className='read-more-btn-blog'>Read more</Button>
                                            </div>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3} className='d-md-flex d-none  justify-content-center align-items-center my-3'>
                            <Card className='cardmain-blog2 d-flex justify-content-center align-items-center'>
                                    <CardImg src={data.image} variant='top' fluid className='card-img' />
                                    <CardBody style={{backgroundColor:"#3b7fbf"}}>
                                        <CardTitle>
                                            <div className='allcardData'>
                                                <h3 className='text-white'>{data.title}</h3>
                                                <h6 className=' text-white d-flex align-items-center gap-2'>
                                                    <FaUser color='#3b7fbf' className='rounded-5' size={22}
                                                        style={{ backgroundColor: "#ffff", padding: "5px" }}
                                                    />
                                                    <span className='text-white'> {data.author}</span>
                                                </h6>
                                                <p className=' text-white'>{data.content}</p>
                                                <Button className='read-more-btn-blog'>Read more</Button>
                                            </div>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3} className='d-md-flex d-none justify-content-center align-items-center my-3'>
                            <Card className=' cardmain-blog2 d-flex justify-content-center align-items-center' >
                                    <CardImg src={data.image} variant='top' fluid className='card-img' />
                                    <CardBody style={{backgroundColor:"#3b7fbf"}}>
                                        <CardTitle>
                                            <div className='allcardData'>
                                                <h3 className='text-white'>{data.title}</h3>
                                                <h6 className=' text-white d-flex align-items-center gap-2'>
                                                    <FaUser color='#3B7FBF' className='rounded-5' size={22}
                                                        style={{ backgroundColor: "#ffff", padding: "5px" }}
                                                    />
                                                    <span className='text-white'> {data.author}</span>
                                                </h6>
                                                <p className='text-white'>{data.content}</p>
                                                <Button className='read-more-btn-blog'>Read more</Button>
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
                    <Button className='btnmain mb-5 w-auto' onClick={()=>navigate('/blogMain')}>Explore all blogs</Button>
            </Row>
        </>
    );
}
