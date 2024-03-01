
import {Row,Col,Carousel} from 'react-bootstrap';
export default  function Section2(){
    return(
        <>
        <Row className='bgphp py-4'>
        <Col md={10} >
        <h3 className='hed3 text-white text-center'>Why Choose Razobyte’s for PHP Development Services?</h3>
        <p className='text-white para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Col>
        <Carousel className='phpindicators'>
        <Carousel.Item>
        <div className='d-flex justify-content-center align-items-center gap-4 py-4'> 
        <div className='php-section-services'> 
        <img src="Image/php-4 (3).png" alt="" className='img-fluid' />
        <h3 className='hed3 py-2' style={{color:"#3b7fbf"}}>30+ Domains
        Served</h3>
        <p>Enhance the functionality and 
        power of the website with 
        seamless </p>
        </div>
        <div className='php-section-services'> 
        <img src="Image/php-4 (2).png" alt="" className='img-fluid' />
        <h3 className='hed3 py-2' style={{color:"#3b7fbf"}}>20+ Years 
        Experience</h3>
        <p>Enhance the functionality and 
        power of the website with 
        seamless </p>
        </div>
        <div className='php-section-services'> 
        <img src="Image/php-4 (4).png" alt="" className='img-fluid' />
        <h3 className='hed3 py-2' style={{color:"#3b7fbf"}}>2k+ Projects
        Delivered</h3>
        <p>Enhance the functionality and 
        power of the website with 
        seamless </p>
        </div>
        <div className='php-section-services'> 
        <img src="Image/php-4 (1).png" alt="" className='img-fluid' />
        <h3 className='hed3 py-2' style={{color:"#3b7fbf"}}>120+ PHP
        Experts</h3>
        <p>Enhance the functionality and 
        power of the website with 
        seamless </p>
        </div>

        </div>

        </Carousel.Item>
        <Carousel.Item>
        <div className='d-flex justify-content-center align-items-center gap-4 py-4'> 
        <div className='php-section-services'> 
        <img src="Image/php-4 (4).png" alt="" className='img-fluid' />
        <h3 className='hed3' style={{color:"#3b7fbf"}}>30+ Domains
        Served</h3>
        <p>Enhance the functionality and 
        power of the website with 
        seamless </p>
        </div>
        <div className='php-section-services'> 
        <img src="Image/php-4 (4).png" alt="" className='img-fluid' />
        <h3 className='hed3' style={{color:"#3b7fbf"}}>30+ Domains
        Served</h3>
        <p>Enhance the functionality and 
        power of the website with 
        seamless </p>
        </div>
        <div className='php-section-services'> 
        <img src="Image/php-4 (4).png" alt="" className='img-fluid' />
        <h3 className='hed3' style={{color:"#3b7fbf"}}>30+ Domains
        Served</h3>
        <p>Enhance the functionality and 
        power of the website with 
        seamless </p>
        </div>
        <div className='php-section-services'> 
        <img src="Image/php-4 (4).png" alt="" className='img-fluid' />
        <h3 className='hed3' style={{color:"#3b7fbf"}}>30+ Domains
        Served</h3>
        <p>Enhance the functionality and 
        power of the website with 
        seamless </p>
        </div>

        </div>
        </Carousel.Item>
        
        </Carousel>

       
      


        </Row>
        </>
    )
}