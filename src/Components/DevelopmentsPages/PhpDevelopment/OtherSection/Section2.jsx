import {Row,Col,Carousel} from 'react-bootstrap'

export default function Section3(){
    return(
        <>
        <Row className='bgphp'>
        <Col md={10} >
        <h3 className='hed2 text-white text-center pt-5 pb-3'>Our Expertise in PHP Development Services</h3>
        <p className='text-white para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Col>
        <Carousel className='phpindicators'>
        <Carousel.Item>
        <div className='d-flex justify-content-center align-items-center gap-4 py-3'> 
        <div className='php-section-services2 '> 
        <h3 className='hed2 py-2 text-center' style={{color:"#3b7fbf"}}>Third-party 
        Integrations</h3>
        <p className='para fs-6 text-center'>Enhance the functionality and 
        power of the website with 
        seamless integration of third 
        party SDK, API , multiple tools 
        and applications.</p>
        </div>
        <div className='php-section-services2 d-md-block d-none'> 
        <h3 className='hed3 py-2 text-center' style={{color:"#3b7fbf"}}>Progressive Web 
        Apps
        </h3>
        <p className='para fs-6 text-center'>Enhance the functionality and 
        power of the website with 
        seamless integration of third 
        party SDK, API , multiple tools 
        and applications.</p>
        </div>
        <div className='php-section-services2 d-md-block d-none'> 
        <h3 className='hed3 py-2 text-center' style={{color:"#3b7fbf"}}>AMP Framework..</h3>
        <p className='para fs-6 text-center'>Enhance the functionality and 
        power of the website with 
        seamless integration of third 
        party SDK, API , multiple tools 
        and applications. </p>
        </div>
        <div className='php-section-services2 d-md-block d-none' > 
        <h3 className='hed3 py-2 text-center' style={{color:"#3b7fbf"}}>Cloud Solutions....</h3>
        <p className='para text-center fs-6'>Enhance the functionality and 
        power of the website with 
        seamless integration of third
        party SDK, API , multiple tools 
        and applications.</p>
        </div>

        </div>

        </Carousel.Item>
        <Carousel.Item>
        <div className='d-flex justify-content-center align-items-center gap-4 py-4'> 
        <div className='php-section-services2  d-md-block d-none'> 
        <h3 className='hed3 py-2 text-center' style={{color:"#3b7fbf"}}>Third-party 
        Integrations</h3>
        <p className='para fs-6 text-center'>Enhance the functionality and 
        power of the website with 
        seamless integration of third 
        party SDK, API , multiple tools 
        and applications.</p>
        </div>
        <div className='php-section-services2 d-md-block d-none'> 
        <h3 className='hed3 py-2 text-center' style={{color:"#3b7fbf"}}>Progressive Web 
        Apps
        </h3>
        <p className='para fs-6 text-center'>Enhance the functionality and 
        power of the website with 
        seamless integration of third 
        party SDK, API , multiple tools 
        and applications.</p>
        </div>
        <div className='php-section-services2 d-md-block d-none'> 
        <h3 className='hed3 py-2 text-center' style={{color:"#3b7fbf"}}>AMP Framework..</h3>
        <p className='para fs-6 text-center'>Enhance the functionality and 
        power of the website with 
        seamless integration of third 
        party SDK, API , multiple tools 
        and applications. </p>
        </div>
        <div className='php-section-services2 ' > 
        <h3 className='hed2 py-2 text-center' style={{color:"#3b7fbf"}}>Cloud Solutions....</h3>
        <p className='para text-center fs-6'>Enhance the functionality and 
        power of the website with 
        seamless integration of third
        party SDK, API , multiple tools 
        and applications.</p>
        </div>

        </div>
        </Carousel.Item>
        
        </Carousel>
        <img src="Image/PHP-SER.svg" className='img-fluid px-0 h-5'/>
        </Row>
        

        </>
    )
}