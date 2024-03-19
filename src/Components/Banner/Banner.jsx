import { Row, Col,Image } from 'react-bootstrap';
import './Banner.css'


export default function Banner({ title ,image}) {
    return (
        <>
            <Row className='d-md-flex justify-content-center align-items-center pb-5'
            >
                <Col md className='d-flex justify-center items-center px-0'
                > 
                <div className='image-container'>
                <Image src={image} alt={title} 
                 fluid/>
              
               
           
                </div>
                    <div className='absolute'>
                        <h1 className='hed1 text-white'>{title}</h1>
                        <div className='image-container'>
                    
                    </div>
                    </div>
                </Col>
            </Row>

        </>
    )
}