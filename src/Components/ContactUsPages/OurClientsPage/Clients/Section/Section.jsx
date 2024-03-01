
import {Row,Col,Button}  from 'react-bootstrap';

import './Section.css'


export default function Section(){
    return(
        <>
        <Row className='d-flex justify-content-center align-items-center py-4'>
        <Col md={10}>
        <h3 className='text-center uppercase hed2'>You are in good Company</h3>
        <div> 
        <div className='d-flex align-items-center justify-content-center gap-5'>
        <img src="https://razobyte.com/wp-content/uploads/2019/04/image009-300x200.jpg"
        alt="" className='img-fluid clientspage-img' />
  
        <img src="https://razobyte.com/wp-content/uploads/2019/04/image005-300x200.jpg"
         alt=""  className='img-fluid  clientspage-img' />
        <img src="https://razobyte.com/wp-content/uploads/2019/04/image004-300x200.jpg"
         alt=""  className='img-fluid clientspage-img' />
        <img src=" https://razobyte.com/wp-content/uploads/2019/04/galuku_logo-300x200.jpg" 
        alt=""  className='img-fluid clientspage-img' /> 
        </div>
       
        <div className='d-flex  align-items-center justify-content-center gap-5 my-3' >
        <img src="https://razobyte.com/wp-content/uploads/2019/04/ohreco-300x200.jpg" 
        alt=""  className='img-fluid clientspage-img ' />
        <img src="https://razobyte.com/wp-content/uploads/2019/04/yes-creation-1-300x200.png"
         alt=""  className='img-fluid clientspage-img ' />
        <img src="https://razobyte.com/wp-content/uploads/2019/04/image006-300x200.jpg" 
        alt="" className='img-fluid clientspage-img'  />
        <img src="https://razobyte.com/wp-content/uploads/2019/04/avon-logo-300x200.jpg" 
        alt="" className='img-fluid clientspage-img'  />
        </div>
        <div className='d-flex  align-items-center justify-content-center gap-5 '>
        <img src="https://razobyte.com/wp-content/uploads/2019/04/image007-300x200.jpg"
         alt="" className='img-fluid clientspage-img
         '  />
        <img src="https://razobyte.com/wp-content/uploads/2019/04/image008-300x200.jpg" alt=""  
        className='img-fluid  clientspage-img'  />
        <img src=" https://razobyte.com/wp-content/uploads/2019/04/verona-logo3-1-300x200.png" 
        alt=""  className='img-fluid  clientspage-img' />
        <img src=" https://razobyte.com/wp-content/uploads/2019/04/yes-creation-1-300x200.png" 
        alt=""  className='img-fluid clientspage-img ' />
        </div>
    

        </div>

        </Col>
        </Row>
   
        </>
    )
}