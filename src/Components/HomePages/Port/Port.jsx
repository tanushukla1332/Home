import React, { useState } from 'react';
import { Row, Col, Card, CardBody, CardImg, CardTitle, CardText, Button } from 'react-bootstrap';
import Portdata from '..//Port/Port.json';
import '../Port/Port.css'
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Port() {
    const [currentPage, setCurrentPage] = useState(2);
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
                <div className={`AllbuttonForMove port-text ${currentPage === 2 ? '' : 'slide'}`} >
                    {visibleRecords.map((item) => (
                        <Col key={item.id} md={6}>
                            <div className='port-text'>
                                <Card className='card-portfolio-main'>
                                    <CardBody>
                                        <FaExternalLinkAlt className='icon-link' size={45} color='#3B7FBF' />
                                        <img src={item.image} alt="" className='img-fluid'
                                            style={{
                                               height  :"50vh",
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
