import {Row,Col,Button} from 'react-bootstrap'
import Main from './MainTemplate/Main'
import Section from './AllSections/Section';
import Blog from '../../Blog/Blog2';


export default function Template({title}){
    return(
       <>
       <Main/>
       <Section/>
       <Blog title="Blogs"/>
       <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center gap-5 '>
       <Col md={12} className='d-md-flex justify-content-center align-items-center py-lg-3 fw-bold  text-light' style={{ letterSpacing: "2px",gap:"150px" }}>
           <p className='my-2'>Interested in a little more details, let us know how we can assist you Button</p>
           <Button variant='dark' className='my-2 py-2 btn-last-banner-contact-Us'>Contact-us</Button>
       </Col>
   </Row>
       
  
       </>
    )
}