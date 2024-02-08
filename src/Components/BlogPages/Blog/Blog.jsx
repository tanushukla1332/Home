import React, { useState } from 'react';
import { Row, Col, CardImg, CardBody, CardTitle, Card, Button,Carousel,CarouselCaption,CarouselItem,} from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import PortData from './BlogsData.json'

export default function Blog() {
    const [currentCategory, setCurrentCategory] = useState('All');

    const filteredBlogs = currentCategory === 'All' ? PortData : PortData.filter(blog => blog.category === currentCategory);

    return (
        <>
            <Row className='justify-content-between my-5 bgSection'>
                <div className='text-center text-light py-5'>
                    <h3>Our Blogs</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, optio?</p>
                    <div className='filter-button d-flex'>
                        <Button variant='dark' onClick={() => setCurrentCategory('All')}>All</Button>
                        <Button variant='dark' onClick={() => setCurrentCategory('Startup')}>Startup</Button>
                        <Button variant='dark' onClick={() => setCurrentCategory('Interacting')}>Interacting</Button>
                        <Button variant='' onClick={() => setCurrentCategory('Security')}>Personal</Button>
                    </div>
                </div>
                {filteredBlogs.map((data, id) => (
                   
                    <Col key={id} md={4} className='pb-5 d-flex justify-conent-center' >
                    <Carousel>
                    <CarouselItem>

                        <Card className='cardmain'>
                            <CardImg src={data.image} variant='top' fluid className='card-img' />
                            <CardBody>
                                <CardTitle>
                                    <div className='allcardData'>
                                        <h3>{data.title}</h3>
                                        <h6 className='d-flex align-items-center gap-2'>
                                            <FaUser color='white'  className='rounded-5' size={22}
                                            style={{backgroundColor:"#3B7FBF",padding:"5px"}}
                                             /> 
                                            <span> {data.author}</span>
                                        </h6>
                                        <p>{data.content}</p>
                                        <Button className='read-more-btn'>Read more</Button>
                                    </div>
                                </CardTitle>
                            </CardBody>
                          
                        </Card>
                        </CarouselItem>
                        </Carousel>
                    </Col>
                ))}
            </Row>
        </>
    );
}
