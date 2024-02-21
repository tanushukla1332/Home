import {Row,Col,Form,FormGroup,FormControl,FormLabel,FormCheck,Button} from 'react-bootstrap'
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin,  FaFacebook, FaInstagram } from "react-icons/fa";




export default function Contact() {


    
    
    return (
    
        <Row style={{backgroundColor:"#FFFF"}}
         className='px-0 justify-content-center  align-items-center gap-5 py-5'
         >
         <div>
         <h2 className=' hed2 text-center'>Let's Talk To Our Experts</h2>
         <p className='subheading-sections'>Let's Talk To Our Experts Let's Talk To Our Experts</p>
         </div>
    
        <Col md={5}>
            <div className='justify-content-center align-items-center'>
                <Form className='Form p-4'
                >
                    <FormGroup>
                        <FormLabel>Name</FormLabel>
                        <FormControl type='text' placeholder='Enter your name' required className='form-control-main-page' />
                    </FormGroup>
                    <FormGroup >
                        <FormLabel>Email Adress</FormLabel>
                        <FormControl type='email' placeholder='Enter your email' required  className='form-control-main-page' />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Phone</FormLabel>
                        <FormControl type='number' placeholder='Enter your number' required  className='form-control-main-page'/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Project</FormLabel>
                        <FormControl as='select' placeholder='Project type' required  className='form-control-main-page'>
                            <option value=''>Project type</option>
                            <option value=''>SEO</option>
                            <option value=''>SMO</option>
                            <option value=''>SEM PPC</option>
                            <option value=''>Mobile app developement</option>
                            <option value=''>E Commerece Website</option>
                            <option value=''>Other</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId='formBasicCheckbox'>
                        <FormCheck type="checkbox" label="Remember Me " className='form-check-mian-page'>
                        </FormCheck>
                    </FormGroup>
                    <div className='w-100  d-flex justify-content-center align-items-center'>
                        <Button type="submit" variant='outline-dark' className='my-4 px-5 btnsubmit'
                            style={{ width: "80%" }}>Submit</Button>
                    </div>

                    <div className='text-center'>
                        <p className='sm mx-5'>if you don't have an account <span className=' text-decoration-underline ' style={{color:"#3B7FBF", cursor:"pointer"}}>Go with </span> </p>
                        <hr />
                        <p className='sm text-center'>or</p>
                        <div className='d-flex justify-content-center align-items-center gap-2 '>
                            <a href="https://maps.app.goo.gl/vTXfDoKJ9iTTwVvz9" target="_blank" >
                            <FcGoogle size={32} /></a>
                            <a href='https://www.linkedin.com/company/razobyte/?originalSubdomain=in' target="_blank" ><FaLinkedin size={32} color='#3B7FBF' /></a>
                            <a href='https://www.instagram.com/razobyte/' target="_blank" ><img src="Image/instagram (1) 1.png" alt="" className='instra' /></a>
                            <a href='https://www.facebook.com/razobyte/' target="_blank">
                            < FaFacebook size={32} color='#3B7FBF'  /></a>
                        </div>
                    </div>
                </Form>
            </div>
        </Col>
        <Col md={5} className='d-none d-md-flex'>
          <div  className='d-flex  flex-column  justify-content-center align-items-center'>
          <div className='d-flex justify-content-center align-items-center'>
          <img src="/Image/163mbj 1.png" alt="" className='img-fluid' />
          </div>
          <div style={{backgroundImage:"url('Image/Rectangle 211 (1).png')",
          backgroundRepeat:"no-repeat",backgroundSize:"155px 105px",backgroundPosition:"center"}} 
          className='pt-5'>
         <div className='d-flex justify-content-center align-items-center'>
          <img src="/Image/prtn1 (4).png" alt="" className='img-fluid' />
          <img src="Image/prtn1 (1).png" alt="" className='img-fluid' />
          </div>
          <div className='d-flex justify-content-center align-items-center'>
          <img src="/Image/prtn1 (3).png" alt="" className='img-fluid' />
          <img src="Image/prtn1 (2).png" alt="" className='img-fluid' />
          </div>
          </div>
         
          </div>
    
           </Col>
        <Col md={5} className='d-sm-none'>
          <div  className='d-flex  flex-column  justify-content-center align-items-center'>
          <div className='d-flex justify-content-center align-items-center'>
          <img src="/Image/163mbj 1.png" alt="" className='img-fluid' />
          </div>
          <div className='d-flex flex-sm-row contactpartnerimage pt-5'>
         <div>
          <img src="/Image/prtn1 (4).png" alt="" className='img-fluid' />
          <img src="Image/prtn1 (1).png" alt="" className='img-fluid' />
          </div>
          <div>
          <img src="/Image/prtn1 (3).png" alt="" className='img-fluid' />
          <img src="Image/prtn1 (2).png" alt="" className='img-fluid' />
          </div>
          </div>
         
          </div>
    
           </Col>
    
            
    </Row>

    
     
      
    );
}
