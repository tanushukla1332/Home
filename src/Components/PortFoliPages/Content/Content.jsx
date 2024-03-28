
import { Row, Col, CardImg, CardBody, CardTitle, Card, Button, Carousel, CarouselItem, } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import portfolioData from '../../../PortData.json'
import { useState } from 'react';
import '../Content/Content.css'

export default function Content() {
    const [currentCategory, setCurrentCategory] = useState('All');
 
    

    const filteredBlogs = currentCategory === 'All' ? portfolioData : portfolioData.filter(blog => blog.category === currentCategory);

  





    return (
        <Row className='justify-content-center align-items-center py-5'>
            <div className='PortfoliomaindivButton flex items-center justify-center flex-col'>
                <div className='allportfoliobutton d-md-flex d-none pb-3 justify-center items-center'>
                    <Button variant='dark' onClick={() => setCurrentCategory('All')}>Show All</Button>
                    <Button variant='dark' onClick={() => setCurrentCategory('Startup')}>Creative</Button>
                    <Button variant='dark' onClick={() => setCurrentCategory('Interacting')}>EcommerceDevelopment</Button>
                    <Button variant='dark' onClick={() => setCurrentCategory('Security')}>SEO</Button>
                    <Button variant='dark' onClick={() => setCurrentCategory('Health')}>Social Media</Button>
                </div>
                <div className='allportfoliobutton d-md-flex d-none'>
                    <Button variant='dark' onClick={() => setCurrentCategory('Fintech')}>Web desgin</Button>
                    <Button variant='dark' onClick={() => setCurrentCategory('SEO')}>Web Development</Button>
                </div>
            </div>
 
           
            {filteredBlogs.map((data, id) => (
                <Col key={id} md={4} className='d-md-flex justify-content-center align-items-center pt-5'>
                    <Card className='cardmainPortfolioSec'>
                        <div className='card-imgPort'>
                            <img src={data.image} variant='top' className='img-fluid' />
                            <div className="overlay">
                                <Button variant="light" className="plus-button" onClick={()=>handleShowData(data.content)}>+</Button>
                            </div>
                        </div>
                            <CardBody>
                            <CardTitle>
                                <div className='allcardDataPortfolioSec'>
                                    <h3 className='hed3 text-[#3b7fbf]'>{data.title}</h3>
                                    <h6 className='d-flex align-items-center gap-2'>
                                        <FaUser color='white' className='rounded-5' size={22} style={{ backgroundColor: "#3B7FBF", padding: "5px" }} />
                                        <span> {data.author}</span>
                                    </h6>
                                    <p className='para'>{data.content}</p>
                                    <Button className='read-more-btn'>Read more</Button>
                                </div>
                            </CardTitle>
                        </CardBody>

                        
                      
                           
                        
                    </Card>
                </Col>
            ))}
               
        </Row>

    )
}