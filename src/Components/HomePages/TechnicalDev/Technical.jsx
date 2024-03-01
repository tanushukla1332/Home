import { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../TechnicalDev/Technical.css';
import Tech from '../TechnicalDev/Technical.json';
import { useNavigate } from 'react-router';

export default function Technical() {
    const navigate=useNavigate()
    const [technicalData, setTechnicalData] = useState('Programming Languages');
    const [filteredTech, setFilteredTech] = useState([]);

    useEffect(() => {
        setFilteredTech(Tech.filter(tech => tech.category === technicalData));
    }, [technicalData]);

    useEffect(() => {
        // Set default category to "Programming Languages" on page load
        setFilteredTech(Tech.filter(tech => tech.category === technicalData));
    }, []);

    return (
        <>
            <Row className=' d-md-flex d-none justify-content-center align-items-center' style={{ backgroundColor: "white" }}>
            <h2 className='hed2 text-center py-3' style={{color:"#3B7FBF"}}>Core Development</h2>
                <div className='alltechnicalbutton d-md-flex d-none'>
                    <Button onClick={() => setTechnicalData("Programming Languages")}>Programming Languages</Button>
                    <Button onClick={() => setTechnicalData("Database")}>Database</Button>
                    <Button onClick={() => setTechnicalData("Frontend")}>Frontend</Button>
                    <Button onClick={() => setTechnicalData("Backend")}>Backend</Button>
                </div>
                <Col md={10} className='d-md-flex justify-content-center align-items-center'>
                    {filteredTech.map((category, categoryId) => (
                        <div key={categoryId} className='alltechincalshowdatadiv'>
                            {category.languages.map((language, languageId) => (
                                <div key={languageId}>
                                    <img src={language.image} alt={language.name} className='img-fluid' />
                                    <p className='para text-center text-white'>{language.name}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                 
                 
                </Col>
                <div className='d-md-flex d-none justify-content-center align-items-center py-4'>
                <Button className='btnmain p-2 fw-bolder fs-6 ' onClick={()=>navigate('/Development')}>View Detail Page</Button>
                </div>
            </Row>
        </>
    );
}
