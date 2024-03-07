
import {Row,Col,Button}  from 'react-bootstrap';

import './Section.css'


export default function Section(){
    return(
        <>
        <Row className='flex items-center justify-center py-4'>
        <Col md={10}>
        <h3 className='text-center uppercase hed2'>You are in good Company</h3>
        <div className='flex  flex-col items-center justify-center'> 
        <div className='gap-md-5 gap-3 d-flex items-center justify-center  my-3'>
        <img src="https://razobyte.com/wp-content/uploads/2019/04/image009-300x200.jpg"
        alt="" className='img-fluid clientspage-img d-md-flex d-none' />
  
        <img src="https://razobyte.com/wp-content/uploads/2019/04/image005-300x200.jpg"
         alt=""  className='img-fluid  clientspage-img' />
        <img src="https://razobyte.com/wp-content/uploads/2019/04/image004-300x200.jpg"
         alt=""  className='img-fluid clientspage-img' />
        <img src=" https://razobyte.com/wp-content/uploads/2019/04/galuku_logo-300x200.jpg" 
        alt=""  className='img-fluid clientspage-img' /> 
        </div>
       
        <div className='d-flex gap-md-5 gap-3  align-items-center justify-content-center my-3' >
        <img src="https://razobyte.com/wp-content/uploads/2019/04/ohreco-300x200.jpg" 
        alt=""  className='img-fluid clientspage-img d-md-flex d-none ' />
        <img src="https://razobyte.com/wp-content/uploads/2019/04/yes-creation-1-300x200.png"
         alt=""  className='img-fluid clientspage-img ' />
        <img src="https://razobyte.com/wp-content/uploads/2019/04/image006-300x200.jpg" 
        alt="" className='img-fluid clientspage-img'  />
        <img src="https://razobyte.com/wp-content/uploads/2019/04/avon-logo-300x200.jpg" 
        alt="" className='img-fluid clientspage-img'  />
        </div>
        <div className='d-md-flex  d-none align-items-center justify-content-center gap-5 '>
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