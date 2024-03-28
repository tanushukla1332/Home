import {Row,Col,Carousel,Card,CardBody,CardText,CardTitle,CardImg,Button} from 'react-bootstrap';
import { GiCheckMark } from "react-icons/gi";
import './Section.css';
import Testominials from '../../../HomePages/Testominals/Testomnials';
import Blog from '../../../Blog/Blog2';
export default function Section(title){
    return(
        <>
        <Row className='d-flex justify-content-center align-items-center py-4'>
        <Col md={10} className='d-flex align-items-center justify-content-center text-center'>
        <div>
        <h3 className='hed2'>Laravel Development</h3>
        <p className='para text-justify '>With vast usage, Laravel development is a complete framework that includes a lot of components, making it fast 
        and easy. Laravel development can be used for a wide variety of projects including B2B projects to SaaS-based 
        apps like CRM.
        Laravel is perfect for both small and large-scale businesses while building custom web applications</p>
        </div>
        </Col>
        </Row>
        <Row className='d-md-flex justify-content-center align-items-center py-4 gap-5'>
        <Col md={5} className='d-flex align-items-center text-center justify-content-center '>
        <div>
        <h3 className='hed2  fs-md-4 text-left'>Is Laravel Development Good 
        for Websites?</h3>
        <p className='para text-justify'>If you are looking for a fast and easy development withhold compromising on the quality of your project. Laravel stands out as one of the leading PHP frameworks for web application development, and for good reason. Its elegant syntax, robust features, and extensive ecosystem make it a top choice for building scalable, secure, and high-performing websites. Whether you're launching a simple blog or a complex e-commerce platform, Laravel empowers developers to streamline the development process and deliver exceptional results.</p>
        </div>

        </Col>
        <Col md={5} className='d-flex justify-content-center align-items-center'>
        <img src="Image/lar-2.png" alt=""  className='img-fluid'/>
        </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center  py-4'>
        <Col md={10} className='p-4 d-flex flex-column gap-3'>
        <h3 className='hed2 text-center'>Advantages of Laravel</h3>
        <div className='laravle-section'>
        <h3 className='font-[600] text-[25px]'>Modular pacakging system</h3>
        <p className='text-[15px]  fs-sm-6  font-[500] text-left'>Laravel comes with a dedicated dependency manager called Composer, allowing developers to easily add or remove packages as needed, 
        enhancing flexibility and scalability.</p>
        </div>
        <div className='laravle-section'>
        <h3 className='font-[600] text-[25px]'>Eloquent ORM</h3>
        <p className='text-[15px]  fs-sm-6  font-[500] text-left'>
        Laravel's ORM (Object-Relational Mapping) simplifies database interactions by providing a fluent, expressive syntax for working with 
        databases. This not only reduces boilerplate code but also improves readability and maintainability..</p>
        </div>
        <div className='laravle-section'>
        <h3 className='font-[600] text-[25px]'>Blade Templating Engine</h3>
        <p className='text-[15px]  fs-sm-6  font-[500] text-left'>Blade, Laravel's powerful templating engine, offers a simple yet robust way to create layouts and include dynamic content. With features like 
        inheritance, sections, and directives, Blade accelerates the development of UI components.</p>
        </div>
        <div className='laravle-section d-md-block d-none'>
        <h3 className='font-[600] text-[25px]'>Built-in Authentication and Authorization</h3>
        <p className='text-[15px]  fs-sm-6  font-[500] text-left'>Laravel provides a seamless authentication system out of the box, making it effortless to implement user authentication and access control. 
        This helps enhance the security of your web applications without the need for extensive custom coding.</p>
        </div>
        <div className='laravle-section d-md-block d-none'>
        <h3 className='font-[600] text-[25px]'>Task Scheduling and Queues</h3>
        <p className='text-[15px]  fs-sm-6  font-[500] text-left'>Laravel simplifies the execution of recurring tasks and background jobs through its intuitive task scheduling and queueing mechanisms. This 
        ensures smoother performance and improved responsiveness for your web applications.</p>
        </div>

        </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center py-4'>
        <Col md={10}>
        <div className='d-flex  flex-column justify-content-center align-items-center'>
        <h3 className='hed2 text-center' >Our On-demand Laravel Development Services</h3>
        <p className='para text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply
        of the printing and typesetting industry.</p>
        </div>
        <div>
        <div className='d-md-flex  justify-content-center align-items-center gap-5 p-3'>
        <div className='laravel-section3 my-3'>
        <img src="Image/lar-3 (1).png" alt="" className='img-fluid' style={{maxWidth:"100px"}} />
        <h3 className='hed3 pt-4' style={{color:"#3b7fbf"}}>Custom Laravel Web Apps</h3>
        <p  className='para text-center pt-2' >Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry.Lorem Ipsum 
        is simply dummy textLorem Ipsum is simply 
        dummy text of the printing and typesetting 
        industry.Lorem Ipsum is simplyof the printing 
        and typesetting industry.dummy text of the 
        printing and typesetting industry.</p>
        </div>
        <div className='laravel-section4 '>
        <img src="Image/lar-3 (8).png" alt="" className='img-fluid ' style={{maxWidth:"100px"}} />
        <h3 className='hed3  text-white pt-4' style={{color:"#3b7fbf"}}>Laravel API Development</h3>
        <p  className='para text-center text-white pt-2'>Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry.Lorem Ipsum 
        is simply dummy textLorem Ipsum is simply 
        dummy text of the printing and typesetting 
        industry.Lorem Ipsum is simplyof the printing 
        and typesetting industry.dummy text of the 
        printing and typesetting industry.</p>
        </div>
        <div>
        </div>

        </div>
        <div className='d-md-flex  d-none justify-content-center align-items-center gap-5 p-3'>
        <div className='laravel-section3'>
        <img src="Image/lar-3 (6).png" alt="" className='img-fluid' style={{maxWidth:"100px"}} />
        <h3 className='hed3 pt-4' style={{color:"#3b7fbf"}}>Laravel QA/ Testing Services</h3>
        <p  className='para text-center pt-2' >Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry.Lorem Ipsum 
        is simply dummy textLorem Ipsum is simply 
        dummy text of the printing and typesetting 
        industry.Lorem Ipsum is simplyof the printing 
        and typesetting industry.dummy text of the 
        printing and typesetting industry.</p>
        </div>
        <div className='laravel-section3 '>
        <img src="Image/lar-3 (7).png" alt="" className='img-fluid ' style={{width:"100px"}} />
        <h3 className='hed3  pt-4 text-center' style={{color:"#3b7fbf"}}>Laravel Migration/ Upgradation</h3>
        <p  className='para text-center pt-2'>Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry.Lorem Ipsum 
        is simply dummy textLorem Ipsum is simply 
        dummy text of the printing and typesetting 
        industry.Lorem Ipsum is simplyof the printing 
        and typesetting industry.dummy text of the 
        printing and typesetting industry.</p>
        </div>
        <div>
        </div>

        </div>
        <div className='d-md-flex  d-none justify-content-center align-items-center gap-5 p-3'>
        <div className='laravel-section3'>
        <img src="Image/lar-3 (4).png" alt="" className='img-fluid' style={{width:"100px"}} />
        <h3 className='hed3 pt-4' style={{color:"#3b7fbf"}}>Laravel Enterprise Solutions</h3>
        <p  className='para text-center pt-2' >Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry.Lorem Ipsum 
        is simply dummy textLorem Ipsum is simply 
        dummy text of the printing and typesetting 
        industry.Lorem Ipsum is simplyof the printing 
        and typesetting industry.dummy text of the 
        printing and typesetting industry.</p>
        </div>
        <div className='laravel-section3 '>
        <img src="Image/lar-3 (5).png" alt="" className='img-fluid ' style={{width:"100px"}} />
        <h3 className='hed3 text-center pt-4' style={{color:"#3b7fbf"}}>Laravel Extension Development</h3>
        <p  className='para text-center  pt-2'>Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry.Lorem Ipsum 
        is simply dummy textLorem Ipsum is simply 
        dummy text of the printing and typesetting 
        industry.Lorem Ipsum is simplyof the printing 
        and typesetting industry.dummy text of the 
        printing and typesetting industry.</p>
        </div>
        <div>
        </div>

        </div>
        <div className='d-md-flex d-none justify-content-center align-items-center gap-5 p-3'>
        <div className='laravel-section3'>
        <img src="Image/lar-3 (3).png" alt="" className='img-fluid' style={{width:"100px"}} />
        <h3 className='hed3 pt-4' style={{color:"#3b7fbf"}}>Laravel Ecommerce Solutions</h3>
        <p  className='para text-center pt-2' >Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry.Lorem Ipsum 
        is simply dummy textLorem Ipsum is simply 
        dummy text of the printing and typesetting 
        industry.Lorem Ipsum is simplyof the printing 
        and typesetting industry.dummy text of the 
        printing and typesetting industry.</p>
        </div>
        <div className='laravel-section3 '>
        <img src="Image/lar-3 (2).png" alt="" className='img-fluid ' style={{width:"100px"}} />
        <h3 className='hed3  text-center pt-4' style={{color:"#3b7fbf"}}>Laravel App Maintenance</h3>
        <p  className='para text-center pt-2'>Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry.Lorem Ipsum 
        is simply dummy textLorem Ipsum is simply 
        dummy text of the printing and typesetting 
        industry.Lorem Ipsum is simplyof the printing 
        and typesetting industry.dummy text of the 
        printing and typesetting industry.</p>
        </div>
        <div>
        </div>

        </div>
        
      
        </div>


        </Col>

        </Row>
  
        <Row className='d-md-flex justify-content-center  align-items-center py-4'
        style={{ background: "linear-gradient(to bottom, rgba(59,127,191,95%), rgba(78,207,255,80%)), url('Image/lar-4.png')"}}>
        <Col md={10} className='d-md-flex  flex-column justify-content-center  align-items-center' >
        <div> 
        <h3 className='hed2 text-white text-center'>Our On-demand Laravel Development Services</h3>
        <p className='para text-white text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply
        of the printing and typesetting industry.</p>
        </div>
        <div>
        <div className='d-md-flex justify-content-center align-items-center gap-4 m-3'>
        <div className='laravel-section6'>
        <h3 className='hed3'>Easy Documentation Process</h3>
        <p className='para text-md-center text-justify'>Being a developer friendly framework, Laravel makes ot extremely 
        easy for developers to document releases. The Laravel API has 
        extremely consistent coding styles with briefly explained methods 
        and classes.Being a developer friendly framework, Laravel makes 
        ot extremely easy for developers to document releases. The 
        Laravel API has extremely consistent coding styles with briefly 
        explained methods and classes.</p>
        </div>
        <div className='laravel-section6 d-md-flex d-none'>
        <h3 className='hed3'>Extreme Security Encryption</h3>
        <p className='para text-md-center text-justify'>Being a developer friendly framework, Laravel makes ot extremely 
        easy for developers to document releases. The Laravel API has 
        extremely consistent coding styles with briefly explained methods 
        and classes.Being a developer friendly framework, Laravel makes 
        ot extremely easy for developers to document releases. The 
        Laravel API has extremely consistent coding styles with briefly 
        explained methods and classes.</p>
        </div>

        </div>
        <div className='d-md-flex justify-content-center align-items-center gap-4 m-3'>
        <div className='laravel-section6'> 
        <h3 className='hed3'>Built-in Project Environment</h3>
        <p className='para text-md-center text-justify'>Being a developer friendly framework, Laravel makes ot extremely 
        easy for developers to document releases. The Laravel API has 
        extremely consistent coding styles with briefly explained methods 
        and classes.Being a developer friendly framework, Laravel makes 
        ot extremely easy for developers to document releases. The 
        Laravel API has extremely consistent coding styles with briefly 
        explained methods and classes.</p>
        </div>
        <div className='laravel-section6 d-md-flex d-none'>
        <h3 className='hed3'>Sample Template Engine</h3>
        <p className='para text-md-center text-justify'>Being a developer friendly framework, Laravel makes ot extremely 
        easy for developers to document releases. The Laravel API has 
        extremely consistent coding styles with briefly explained methods 
        and classes.Being a developer friendly framework, Laravel makes 
        ot extremely easy for developers to document releases. The 
        Laravel API has extremely consistent coding styles with briefly 
        explained methods and classes.</p>
        </div>

        </div>
        </div>

        </Col>

        </Row>
        <Row className='p-4 justify-content-center align-items-center'>
            <div className='text-center'>
                <h3 className='hed2'>Laravel Projects</h3>
                <p className='para '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, provident!</p>
            </div>
            <Col md className='d-md-flex justify-content-center align-items-center laravelindicators'>
                <Carousel indicators={true}>
                    <Carousel.Item>
                        <Row className='justify-content-center align-items-center'>
                            <Col md={5} className=' d-flex justify-content-center align-items-center'>
                            <Card className='laravel-card-section'>
                                <CardImg  src='Image/lar-5 (1).jpg' fluid/>
                                    <CardBody>
                                        <CardTitle className='absolute bottom-[100px] left-[60px] border-bottom'>
                                        <h3 className='hed3 text-light'>Blog System</h3>
                                        </CardTitle>

                                        <CardText className='absolute bottom-[60px] left-[60px] '>
                                        <p className='para fw-bold text-light '>ECOMMERCE DEVELOPMENT</p>
                                            
                                            
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={5} className='py-3 d-md-flex justify-content-center d-none align-items-center'>
                                <Card className='laravel-card-section'>
                                <CardImg src='Image/lar-6.jpg'  fluid/>
                                    <CardBody>
                                        <CardTitle className='absolute bottom-[100px] border-bottom
                                        left-[60px]'>
                                           <h3 className='hed3 text-white'>Bookstore Inventory</h3>
                                        </CardTitle>
                                        <CardText className='absolute bottom-[60px] left-[60px]'>
                                        <p className='para text-white fw-bold '>SINGAPORE, WEB DESIGN</p>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Row className='justify-content-center align-items-center'>
                    <Col md={5} className=' d-flex justify-content-center align-items-center'>
                        <Card className='laravel-card-section'>
                        <CardImg  src='Image/lar-5 (1).jpg' fluid/>
                            <CardBody>
                                <CardTitle className='absolute bottom-[100px] border-bottom
                                 left-[60px]'>
                                <h3 className='hed3 text-white'>Blog System</h3>
                                </CardTitle>
                        
                                <CardText className='absolute bottom-[60px] left-[60px] '>
                                <p className='para  fw-bold text-white'>ECOMMERCE DEVELOPMENT</p>
                                    
                                    
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={5} className='py-3 d-md-flex justify-content-center d-none align-items-center'>
                        <Card className='laravel-card-section'>
                        <CardImg src='Image/lar-6.jpg'  fluid/>
                            <CardBody>
                                <CardTitle className='absolute bottom-[100px] border-bottom
                                left-[60px]'>
                                   <h3 className='hed3 text-white'>Bookstore Inventory</h3>

                                </CardTitle>
            
                                <CardText className='absolute bottom-[60px] left-[60px]  '>
                                <p className='para fw-bold text-white'>SINGAPORE, WEB DESIGN</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        <Testominials/>
        <Row className='d-flex justify-content-center align-items-center gap-5 py-4'>
        <Col md={10}>
        <div>
        <h3 className='hed3 text-center'>Extensive Expertise on Latest Frameworks</h3>
        <p className='para text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply</p>
        </div>
        <div>
        <div className='d-flex justify-content-center align-items-center gap-md-4 gap-sm-4'>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (12).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3  fs-6 fs-md-6  pt-md-2' style={{color:"#3b7fbf"}}>Node js</h3>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (11).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 fs-md-6 pt-md-2' style={{color:"#3b7fbf"}}>Angular js</h3>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (10).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 fs-md-6 pt-md-2' style={{color:"#3b7fbf"}}>React js</h3>
        </div>
        <div className='d-md-flex d-none flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (9).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 fs-md-6 pt-md-2' style={{color:"#3b7fbf"}}>.Net Core</h3>
        </div>
        <div className='d-md-flex d-none flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (8).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6  fs-md-6 pt-md-2'  style={{color:"#3b7fbf"}}>Laravel</h3>
        </div>
        
        </div>
        <div className='d-md-flex d-none justify-content-center align-items-center gap-4 '>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (7).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 pt-2' style={{color:"#3b7fbf"}}>Rxweb.io</h3>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (6).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 pt-2' style={{color:"#3b7fbf"}}>Mean</h3>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (5).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 pt-2' style={{color:"#3b7fbf"}}>Codelgniter</h3>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (4).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 pt-2' style={{color:"#3b7fbf"}}>CakePHP</h3>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (3).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 pt-2'  style={{color:"#3b7fbf"}}>Spring</h3>
        </div>
        
        </div>
        <div className='d-flex justify-content-center align-items-center gap-md-4 gap-sm-4 '>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (2).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 pt-2' style={{color:"#3b7fbf"}}>Express js</h3>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center Laravelsection8'>
        <img src="Image/lar-8 (1).png" alt=""  className='img-fluid w-50'/>
        <h3 className='hed3 fs-6 pt-2' style={{color:"#3b7fbf"}}>Vue js</h3>
        </div>
        
       
        
        </div>
        

        </div>
        </Col>
        </Row>
        <Row className='laravelsection9 d-flex justify-content-center align-items-center py-4'>
        <Col md={10}>
        <div className='pt-3'>
        <h3 className='hed2 text-white text-center'>Radixweb’s Laravel Web Development – Key Differentiators</h3>
        <p className='para text-white text-md-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply</p>
    
        </div>
        <div>
        <div className='d-flex justify-content-center align-items-center'>
        <div className='laravelSection10 '>
        <img src="Image/lar-9 (6).png" alt=""  className='img-fluid '  style={{width:"130px"}}/>
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Competent Pricing</h3>
        </div>
        <div className='laravelSection10'>
        <img src="Image/lar-9 (5).png" alt=""  className='img-fluid '  style={{width:"130px"}}/>
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Flexible Collaboration</h3>
        </div>
        <div className='laravelSection10 d-md-flex d-none'>
        <img src="Image/lar-9 (4).png" alt=""  className='img-fluid'  style={{width:"130px"}}/>
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Code Standards</h3>
        </div>
        </div>
        <div className='d-flex  justify-content-center align-items-center'>
        <div className='laravelSection10'>
        <img src="Image/lar-9 (3).png" alt=""  className='img-fluid '  style={{width:"130px"}}/>
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Extensive QA Testing</h3>
        </div>
        <div className='laravelSection10'>
        <img src="Image/lar-9 (2).png" alt=""  className='img-fluid '  style={{width:"130px"}}/>
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Project Methodology</h3>
        </div>
        <div className='laravelSection10  d-md-flex d-none'>
        <img src="Image/lar-9 (1).png" alt=""  className='img-fluid'  style={{width:"130px"}}/>
        <h3 className='hed3 fs-6 text-center' style={{color:"#3b7fbf"}}>Real-time 
        Communication</h3>
        </div>
        </div>
        </div>

        </Col> 
        </Row>
        <Row className='d-flex justify-content-center align-items-center p-5'>
        <Col md={10}>
        <div>
        <h3 className='hed2 text-center'>Tailored After Care and Support for Laravel</h3>
        <p className='para  text-center'>At Radixweb we have designed tailored-to-needs maintenance and support packages for your Laravel interfaces. Here are some highlights:</p>
        </div>
        <div>
        <div className='d-flex justify-content-center align-items-center gap-5'>
        <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex gap-2'>
        <GiCheckMark color='#3b7fbf' size={35}/>
        <p className='para'>
        90 days no-cost Bug-free warranty for bug control, 
        updates and security patches</p>
        </div>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex  gap-2'>
        <GiCheckMark color='#3b7fbf' size={35}/>
        <p className='para'>Option for access to ad-hoc developers for 
        maintaining, upgrading web solutions</p>
        </div>

        </div>
        

        </div>
        <div className='d-flex justify-content-center align-items-center gap-5'>
        <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex  gap-2'>
        <GiCheckMark color='#3b7fbf' size={35}/>
        <p className='para '>Retained service agreement along with your 
        existing agreement with fixed man hours</p>
        </div>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex  gap-2'>
        <GiCheckMark color='#3b7fbf' size={35}/>
        <p className='para'>Flexibility of choosing support package – add 
specific features, decide time frames.. </p>
        </div>

        </div>
        

        </div>
     

        </div>

        </Col>
        </Row>

        <Row className='laravelSection12 d-flex justify-content-center align-items-center  py-4'>
        <Col md={10}>
        <h3 className='hed2 text-white text-center'>Looking for Something Else?</h3>
        <p className='para text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellat alias voluptatum quod error laborum!</p>
        <div className='d-md-flex justify-content-center align-items-center'>
        <div className='laravelSection13'>
        <img src="Image/lar-10 (3).png" alt=""  className='img-fluid w-20'/>
        <h3 className='hed3  text-center'>CodeIgniter Development</h3>
        <p className='para text-center'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and  
        typesetting industry.Lorem 
        Ipsum is simply</p>
        </div>
        <div className='laravelSection13'>
        <img src="Image/lar-10 (2).png" alt=""  className='img-fluid w-20'/>
        <h3 className='hed3  text-center'>PHP Development</h3>
        <p className='para text-center'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and  
        typesetting industry.Lorem 
        Ipsum is simply</p>
        </div>
        <div className='laravelSection13 d-md-flex d-none'>
        <img src="Image/lar-10 (1).png" alt=""  className='img-fluid w-20'/>
        <h3 className='hed3  text-center'>CakePHP Development</h3>
        <p className='para text-center'>Lorem Ipsum is simply dummy 
        text of the printing and 
        typesetting industry.Lorem 
        Ipsum is simply dummy text
        Lorem Ipsum is simply dummy 
        text of the printing and  
        typesetting industry.Lorem 
        Ipsum is simply</p>
        </div>

        </div>

       
        </Col>
        </Row>
        <Blog title="Blogs"/>
       

        </>
    )
}