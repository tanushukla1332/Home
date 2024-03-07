
import { Row, Col, Button } from 'react-bootstrap';
import '../Social-Media-optimization/SocialMediaOptimization.css'
import Blog from '../../HomePages/Blog/Blog2';
import { useNavigate } from 'react-router';



export default function SocialMediaOpt() {
    const navigate=useNavigate()

    return (

        <>
           
        <Row 
        className='justify-content-center align-items-center'
        >
        <Col md  className='px-0'>
        <img src="Image/SMO-Banner.png" alt="" className='img-fluid' />
        <div className='absolute top-5 left-5 w-50'>
        <h1 className='hed1'>Social Media Optimization</h1>
        </div>
        </Col>

        </Row>
                <Row className='justify-content-center align-items-center py-lg-5  bgim'  style={{backgroundImage:"url('Image/blue.png')",backgroundPosition:"right",backgroundSize:"50%",backgroundRepeat:"no-repeat"}}>
                    <Col md={10} >
                        <h1  className='text-center hed2 py-4'>Much more than posting!!!</h1>
                        <p className=' para'>
                        Instagram has around 2 billion active mobile users, about 28% of the whole world population with its largest database consisting of a young audience of 18-34 years of age. Twitter is one of the most active social media to ever exist with brands, leaders and celebrities regularly interacting with people.
                        LinkedIn is the unopposed pioneer as a professional social media platform.</p>
                        
                  <p className='para'>  This is just the tip of the iceberg.</p>
                        
                      <p className='para'>In the current age of Social Media dominance the regular random post here and there isn’t going to make the cut.</p>
                     
                       <p className='para'> So let’s dive into the depth of Social Media to understand what can make you stand out in the modern world.</p>
                        

                        

                    </Col>
                </Row>

                <Row className='justify-content-center bgsection-homepage-smo  align-items-center gap-5 py-5'>
                    {/* First image for large screens */}
                    <Col md={4} className='d-none d-sm-flex justify-content-center align-items-center'>
                        <img src="/Image/annd 1.png" alt="" className='img-fluid'/>
                    </Col>

                    {/* Content for all screens */}
                    <Col md={6} >
                        <h2 className='text-center hed2'>Platform analysis and prioritising</h2>
                        <p className='para text-justify'>Imagine someone having lunch in the bath-tub, It’s not a good look, Is it?
                        Prioritising social media platforms for your business and creating content accordingly will get you the attention of your audience and potentially their business.</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='btn2 text-center'>Get in Touch</Button>
                        </div>
                    </Col>
                    {/* Second image for small screens */}
                    <Col md={4} className="d-sm-none">
                        <img
                            src="/Image/annd 1.png"
                            alt=""
                            className="img-fluid"
                           
                        />
                    </Col>
                </Row>

                <Row className='justify-content-center align-items-center gap-5 py-5'>
                    <Col md={6}>
                        <h2 className='hed2 text-center'>Strategic Content Creation</h2>
                        <p className='para text-justify'>More than just some icons, images, and words, we take a holistic
                            approach to web design. By harnessing the power of shape, font, and colour psychology, we bring the designs to life and ensure the designs portray the brand’s vision.</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='btn2 text-center'>Get in Touch</Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <img src="/Image/lifestyle 1.png" alt="" className='img-fluid' />
                    </Col>
                </Row>
                <Row className='justify-content-center bgsection2-homepage-smo  align-items-center gap-5 '>
                {/* First image for large screens */}
                <Col md={4}>
                   <div className="image-smo d-none d-sm-flex">
                   <img src="/Image/gfhsgfd 1.png" alt="" className='img-fluid'/>
                   </div>
                </Col>

                {/* Content for all screens */}
                <Col md={6}>
                    <h2 className='hed2 text-light text-center'>Regular Engagement</h2>
                    <p className='para text-light text-justify'>Imagine someone having lunch in the bath-tub, It’s not a good look, Is it?
                    Prioritising social media platforms for your business and creating content accordingly will get you the attention of your audience and potentially their </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button className='btn-3 text-center'>Get in Touch</Button>
                    </div>
                </Col>
                {/* Second image for small screens */}
                <Col md={4} className="d-sm-none image-smo2 mb-5 ">
                    <img
                        src="/Image/gfhsgfd 1.png"
                        alt=""
                        className="img-fluid"
                       
                    />
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center gap-5 py-5'>
                    <Col md={6}>
                        <h2 className='hed2 text-center'>Analytics</h2>
                        <p className='para text-justify' >More than just some icons, images, and words, we take a holistic 
                        approach to web design. By harnessing the power of shape, font, and colour psychology, we bring the designs to life and ensure the designs portray the brand’s vision.</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='btn2 text-center'>Get in Touch</Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <img src="/Image/lifestyle 1.png" alt="" className='img-fluid' />
                    </Col>
                </Row>
                <Row className='justify-content-center bgsection-homepage-smo   bgim align-items-center gap-5 my-5 py-5'  style={{backgroundImage:"url('Image/blue.png')",backgroundPosition:"right",backgroundSize:"50%",backgroundRepeat:"no-repeat"}}>
                    {/* First image for large screens */}
                    <Col md={4} className='d-none d-sm-flex justify-content-center align-items-center'>
                        <img src="/Image/annd 1.png" alt="" className='img-fluid'/>
                    </Col>

                    {/* Content for all screens */}
                    <Col md={6} >
                        <h2 className='text-center hed2'>Planned Roadmap</h2>
                        <p className='para'>Imagine someone having lunch in the bath-tub, It’s not a good look, Is it?
                        Prioritising social media platforms for your business and creating content accordingly will get you the attention of your audience and potentially their business.</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='btn2 text-center'>Get in Touch</Button>
                        </div>
                    </Col>
                    {/* Second image for small screens */}
                    <Col md={4} className="d-sm-none">
                        <img
                            src="/Image/annd 1.png"
                            alt=""
                            className="img-fluid"
                           
                        />
                    </Col>
                </Row>
                <Row className='flex justify-content-center align-items-center py-5'>
                <Col md={10}>
                <h2 className='hed2 text-center'>Top Soical Media Projects</h2>
                <div className='d-flex justify-content-center align-items-center gap-[150px] py-5'>
                <div className='Semproj-shadow'>
                <img src="Image/Sem-top-pr-1.png" alt="" className='img-fluid w-50'/>
                <img src=" Image/Sem-top-pr-2.png" alt="" className='img-fluid w-50'/>
                </div>
                <div className='Semproj-shadow d-md-flex d-none'> 
                <div className='d-flex justify-content-center align-items-center gap-2'>
                <img src="Image/image 2 (1).png" alt=""  className='img-fluid w-50' />
                <img src="Image/img (11).png" alt=""  className='img-fluid w-50'/>
                <img src="Image/img (13).png" alt=""  className='img-fluid w-50'/>
                
                </div>
                <div className='d-flex justify-content-center align-items-center gap-2'>
                <img src="Image/img (9).png" alt=""  className='img-fluid w-50'/>
                <img src="Image/img (12).png" alt=""  className='img-fluid w-50'/>
                <img src="Image/img (15).png" alt=""  className='img-fluid w-50'/>
                
        
                </div>
                </div>
                
                </div>
                </Col>
                </Row>   
                <Row className='d-flex justify-content-center align-items-center py-5'>
                <Col md={5} className='d-flex justify-content-center align-items-center mb-3'>
                    <div className='custom2-shadow'>
                        <img src="/Image/Search-projects2.png" alt="" className='img-fluid w-50' />
                        <p className='para pt-2 text-center cursor-pointer' onClick={() => navigate('/socialMedia')}> Social Media Strategy</p>

                    </div>
                </Col>
                <Col md={5} className='d-flex justify-content-center align-items-center mb-3 '>
                    <div className='custom2-shadow'>
                        <img src="/Image/programming (1) 1 (3).png" alt="" className='img-fluid w-50' />
                        <p className='para pt-3 text-center'>Search Media Marketing</p>
                    </div>

                </Col>

            </Row>
                <Blog/>
                <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center align-items-center mt-5'>
                <Col md={12} className='flex items-center justify-center gap-5 py-3'>
                    <p className='para text-white'>Interested in a little more details, let us know how we can assist you Button</p>
                    <Button variant='dark' className='btn-last-banner-contact-Us'>Contact-us</Button>
                </Col>
            </Row>
        </>

    )
}