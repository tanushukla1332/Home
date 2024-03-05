import {Row,Col} from 'react-bootstrap';
import '../Banner/Banner.css'
export default function Banner(){
    return(
        <>
        <Row  className='d-sm-flex justify-content-center align-items-center'
        
        >
        <Col md   className='d-flex justify-center items-center px-0'
> <div className='image-container'>
<img src="Image/BLOG-1.jpg" alt=""  className='img-fluid'/>
</div>
            
        <div className='absolute'>

        <h1 className='hed1 text-white'>Welcome to Our Blog page</h1>
        </div>
        </Col>
        </Row>

        </>
    )
}