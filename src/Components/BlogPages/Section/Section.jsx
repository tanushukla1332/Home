import React, { useState } from 'react';
import { Row, Col, Card, CardImg, CardText, CardTitle, CardBody, Button } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import sectiondata from './sectionall.json';
import '../Section/Section.css';
import { useNavigate } from 'react-router';

export default function Section() {
    const [input, setInput] = useState('');
    const [filteredData, setFilteredData] = useState(sectiondata);
    const navigate=useNavigate()

    const handleSearch = () => {
        const lowercasedInput = input.toLowerCase();
        const newFilteredData = sectiondata.filter(item =>
            item.Category.toLowerCase().includes(lowercasedInput)
        );
        setFilteredData(newFilteredData);
    };
    const handleChange = (e) => {
        setInput(e.target.value);
      
    }
   

    return (
        <>
            <Row  className='py-5'>
            <div className='d-flex justify-content-center align-items-center py-5 mainsearchbardiv'>
               <div className='d-flex justify-content-center align-items-center gap-2'>
               <FaSearch  className='searchbar' color='#3b7fbf' onClick={handleSearch} size={25}/>
               <input
                   type="text"
                   placeholder='Search'
                   onChange={handleChange}
                   value={input}
                   className='inputfield text-center'
             
               />
               </div> 
            </div>
                {filteredData.map((item) => (
                    <Col key={item.id} md={4} className='d-flex justify-content-center align-items-center'>
                        <Card className='d-md-flex justify-content-centerm card-main-blog' onClick={()=>navigate('/firstBlog')} >
                            <CardImg src={item.IMAGE} alt={item.full_name} className='img-fluid d-flex justify-content-center align-items-center card-imag0main-blog' />
                            <CardBody>
                            <CardTitle className='title-h4'>
                                <h4 >{item.full_name}</h4>
                            </CardTitle>
                                <CardText className='card-text-mainblog'>
                                    <p>{item.title}</p>
                                    <Button className='read-more-btn'>Click here</Button>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}
