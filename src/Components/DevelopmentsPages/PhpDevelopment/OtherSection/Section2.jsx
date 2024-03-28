import {Row,Col,Carousel} from 'react-bootstrap'

export default function Section3(){
    return(
        <>
        <Row className='bgphp'>
        <Col md={10} >
        <h2 className='hed2 text-white text-center pt-5 pb-3'>The Advantages of PHP Frameworks</h2>
      
        </Col>
        <Carousel className='phpindicators'>
        <Carousel.Item>
        <div className='d-flex justify-content-center align-items-center gap-4 py-3'> 
        <div className='php-section-services2 '> 
        <h3 className='hed3 py-2 ' style={{color:"#3b7fbf"}}>Rapid Development</h3>
        <p className='para '>PHP frameworks provide a solid foundation for building web applications quickly and efficiently, thanks to their extensive libraries and built-in functionalities.</p>
        </div>
        <div className='php-section-services2 d-md-block d-none'> 
        <h3 className='hed3 py-2' style={{color:"#3b7fbf"}}>MVC Architecture
        </h3>
        <p className='para '>PHP frameworks follow the Model-View-Controller (MVC) architecture, promoting code organization and separation of concerns, which enhances maintainability and scalability.</p>
        </div>
        <div className='php-section-services2 d-md-block d-none'> 
        <h3 className='hed3 py-2' style={{color:"#3b7fbf"}}>Security</h3>
        <p className='para '>PHP frameworks come with built-in security features, such as input validation, CSRF protection, and secure session handling, helping to mitigate common security threats </p>
        </div>
        <div className='php-section-services2 d-md-block d-none' > 
        <h3 className='hed3 py-2 ' style={{color:"#3b7fbf"}}>Community Support</h3>
        <p className='para'> PHP frameworks benefit from active and vibrant communities of developers, who contribute plugins, extensions, and documentation, making it easier to troubleshoot issues and find solutions.</p>
        </div>

        </div>

        </Carousel.Item>
       <Carousel.Item>
        <div className='d-flex justify-content-center align-items-center gap-4 py-3'> 
        <div className='php-section-services2 '> 
        <h3 className='hed3 py-2 ' style={{color:"#3b7fbf"}}>Rapid Development</h3>
        <p className='para '>PHP frameworks provide a solid foundation for building web applications quickly and efficiently, thanks to their extensive libraries and built-in functionalities.</p>
        </div>
        <div className='php-section-services2 d-md-block d-none'> 
        <h3 className='hed3 py-2' style={{color:"#3b7fbf"}}>MVC Architecture
        </h3>
        <p className='para '>PHP frameworks follow the Model-View-Controller (MVC) architecture, promoting code organization and separation of concerns, which enhances maintainability and scalability.</p>
        </div>
        <div className='php-section-services2 d-md-block d-none'> 
        <h3 className='hed3 py-2' style={{color:"#3b7fbf"}}>Security</h3>
        <p className='para '>PHP frameworks come with built-in security features, such as input validation, CSRF protection, and secure session handling, helping to mitigate common security threats </p>
        </div>
        <div className='php-section-services2 d-md-block d-none' > 
        <h3 className='hed3 py-2 ' style={{color:"#3b7fbf"}}>Community Support</h3>
        <p className='para'> PHP frameworks benefit from active and vibrant communities of developers, who contribute plugins, extensions, and documentation, making it easier to troubleshoot issues and find solutions.</p>
        </div>

        </div>

        </Carousel.Item>
        
        </Carousel>
        <img src="Image/PHP-SER.svg" className='img-fluid px-0 h-5'/>
        </Row>
        

        </>
    )
}