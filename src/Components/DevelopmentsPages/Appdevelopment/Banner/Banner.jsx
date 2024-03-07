
import {Row,Col,Button} from 'react-bootstrap';
import '../Banner/Banner.css'

export default function Banner(){
    return(
        <>
    
        <Row className='bannermaindivdev d-md-flex d-none justify-content-center '
         style={{backgroundImage:"url('Image/wave (14).svg')"}}>
        <Col md={12}>
        <div className='maindevtextdiv'>
        <div>
        <h1>Your Success Is Our Purpose</h1>
        <h4>we've Got Experienced Developers</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, soluta.</p>
        <Button className='site-button'>Get a web Development</Button>
        </div>
        <div className='deve-img-banner-leftside'>
        <img src="Image/dev-2.png" alt="" className='img-fluid'/>
        </div>
        </div>
       
 
        </Col>
      

        </Row>
        <Row className='d-flex d-sm-none  justify-content-center align-items-center backcolor py-5'>
        <Col md={8} className='d-flex justify-content-center  align-items-center'>
        <div>
        <h1 className='hed2 text-light'>Your Success Is Our Purpose</h1>
        <h4 className='hed3 text-light'>we've Got Experienced Developers</h4>
        <p className='para text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, soluta.</p>
        <Button className='site-buttonx d-none'>Get a web Development</Button>
        </div>
        </Col>
        <Col md={4} className='d-flex justify-content-center align-items-center' >
        <img src="Image/dev-2.png" alt="" className='img-fluid'/>
        </Col>
        </Row>
     </>
    )
}