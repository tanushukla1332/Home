import React, { useState } from 'react';
import { Row, Col, Card, CardBody, CardImg, CardTitle, CardText, Button } from 'react-bootstrap';
import Portdata from '..//Port/Port.json';
import '../Port/Port.css'
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from 'react-router';

export default function Port() {
    const navigate=useNavigate()
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage =2;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const visibleRecords = Portdata.slice(firstIndex, lastIndex);
    const numberOfPages = Math.ceil(Portdata.length / recordsPerPage);
    const handlePageClick = (index) => {
        setCurrentPage(index);

       
    };

    const pageArray = Array.from({ length: numberOfPages }, (item, index) => index + 1);

    return (
        <>
            <Row className='py-5 justify-content-center align-items-center'
                style={{
                    backgroundImage: "url('/Image/blue.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "60%",
                    backgroundPosition: "center",
                    backgroundColor: "#FFFF"
                }}
            >
                <div className='text-center'>
                    <h3 className='hed2 '>Portfolio</h3>
                    <p className='subheading-sections'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className={`AllbuttonForMove port-text ${currentPage === 1 ? '' : 'slide'}`} >
                    {visibleRecords.map((item,id) => (
                        <Col key={id} md={6} className='d-md-flex justify-content-center align-items-center pt-5'>
                        <Card className='Card-Portfolio'>
                            <div className='Port-imgPort'>
                                <img src={item.image} variant='top' className='img-fluid' />
                                <div className="overlay-link">
                                    <FaExternalLinkAlt  className="icon-button" size={35} color='#ffff'onClick={()=>navigate('/portfolio')}/>
                                </div>
                            </div>
                                    <CardBody>   
                                        <CardTitle><h4 className='hed3'>{item.title}</h4></CardTitle>
                                        <CardText>
                                            <h6 className='para text-center'>{item.subTitle}</h6>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            
                        </Col>
                    ))}
                </div>
                <div className='AllbuttonForMove'>
                    {pageArray.map((page) => (
                        <Button key={page} onClick={() => handlePageClick(page)}>
                            {page}
                        </Button>
                    ))}
                </div>
            </Row>
        </>
    );
}
