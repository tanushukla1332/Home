
import { Row, Col, Button } from 'react-bootstrap';
import '../Banner/Banner.css';

export default function Banner() {
    return (
        <>
          <Row className='flex items-center justify-center'
          
            >
                <Col md className='flex items-center justify-center px-0'>
                <img src="Image/E-commerce-Banner.png" alt="" className='img-fluid' />
                <div className='absolute'>
                <h1 className='hed1 text-white'>Ecommerce Solutions</h1> 
                </div>
                  
                  
           
                     
                   

                </Col>
            </Row>
           

        </>
    )
}