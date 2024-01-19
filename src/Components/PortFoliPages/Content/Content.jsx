
import { Row, Col, CardImg, CardBody, CardTitle, Card, Button, Carousel, CarouselItem, } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import portfolioData from '../../../PortData.json'
import { useState } from 'react';
import '../Content/Content.css'

export default function Content() {
    const [currentCategory, setCurrentCategory] = useState('All');

    const filteredBlogs = currentCategory === 'All' ? portfolioData : portfolioData.filter(blog => blog.category === currentCategory);

    return (
        <Row className='justify-content-center align-items-center'>
            <div className='PortfoliomaindivButton'>
                <div className='allportfoliobutton'>
                    <Button variant='dark' onClick={() => setCurrentCategory('All')}>Show All</Button>
                    <Button variant='dark' onClick={() => setCurrentCategory('Startup')}>Creative</Button>
                    <Button variant='dark' onClick={() => setCurrentCategory('Interacting')}>EcommerceDevelopment</Button>
                    <Button variant='dark' onClick={() => setCurrentCategory('Security')}>SEO</Button>
                    <Button variant='dark' onClick={() => setCurrentCategory('Health')}>Singapore</Button>
                </div>
                <div className='secportbutton'>
                    <Button variant='dark' onClick={() => setCurrentCategory('Fintech')}>Web desgine</Button>
                    <Button variant='dark' onClick={() => setCurrentCategory('SEO')}>Web Development</Button>
                </div>
            </div>

            {filteredBlogs.map((data, id) => (

                <Col key={id} md={4} className='pb-5 d-md-flex justify-conent-center align-items-center' >

                    <Card className='cardmainPortfolioSec'>
                        <CardImg src={data.image} variant='top' fluid className='card-imgPort' />
                        <CardBody>
                            <CardTitle>
                                <div className='allcardDataPortfolioSec'>
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
            ))}
        </Row>

    )
}