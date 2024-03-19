
import { Row, Col, Button } from 'react-bootstrap'
import '../SEM/SEM.css';
import { useNavigate } from 'react-router';
import Blog from '../../Blog/Blog2';


export default function SEM(title) {
const navigate=useNavigate()
    return (

        <>
            <Row className='flex items-center align-items-center justify-center'>
                <Col md className='px-0' >
                    <img src="Image/Search-engine-banner.png" alt="" className='img-fluid' />
                    <div className=' absolute w-50 top-5 left-5'>
                        <h1 className='hed1'> Search Engine Marketing</h1>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center gap-5 py-5 bgrem' style={{ backgroundImage: "url('Image/blue.png')", backgroundSize: "50%", backgroundPosition: "right", backgroundRepeat: "no-repeat" }} >
                <Col md={5}>
                    <h2 className='hed2 text-center'>What is PPC</h2>
                    <p className='para text-justify'>PPC, or Pay-Per-Click advertising, is a digital marketing model where advertisers pay a fee each time their ad is clicked. It's an effective way to reach potential customers at the right moment, as your ads appear when users search for keywords related to your business on search engines like Google or Bing, or when they browse websites within your target audience.</p>
                    <p className='para'>
                        We specialize in Pay-Per-Click (PPC) advertising, a powerful digital marketing strategy designed to drive targeted traffic to your website and increase conversions. Let's delve into what PPC is all about, why it's essential for your business, and how Razobyte can help you utilise its full potential.
                    </p>
                    <div className='d-flex py-2 align-items-center justify-center py-2'>
                        <Button className='btn2 text-center'>Get in Touch</Button>
                    </div>
                </Col>
                <Col md={5} className='d-flex justify-content-center align-items-center'>
                    <img src="/Image/sem.png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className='justify-content-center bgsection-homepage-sem  align-items-center gap-5 py-5  '>
                {/* First image for large screens */}
                <Col md={5} className='d-none d-sm-flex justify-content-center align-items-center'>
                    <img src="/Image/sem1 (5).png" alt="" className='img-fluid' />
                </Col>
                {/* Content for all screens */}
                <Col md={5} >
                    <h2 className='text-center hed2'>Straight to the customers</h2>
                    <p className='para text-justify'>
                        With PPC, you're not just casting a wide net and hoping for the best. Instead, you're targeting your ads directly to potential customers who are actively searching for products or services like yours. This means your marketing efforts are focused and efficient, maximizing your return on investment (ROI) and driving qualified leads to your website.
                        <div className='d-flex align-items-center justify-center py-2'>
                            <Button className='btn2 text-center'>Get in Touch</Button>
                        </div>
                    </p>
                </Col>
                {/* Second image for small screens */}
                <Col md={5} className="d-sm-none">
                    <img
                        src="/Image/sem1 (5).png"
                        alt=""
                        className="img-fluid"

                    />
                </Col>
            </Row>

            <Row className='justify-content-center align-items-center gap-5 py-5 '>
                <Col md={5}>
                    <h2 className='hed2 text-center'>What’s the Hype about?</h2>
                    <p className='para text-justify'>   The hype surrounding PPC isn't just hype – it's well-deserved praise for a marketing strategy that delivers tangible results. PPC offers unparalleled targeting options, real-time tracking and analytics, and the flexibility to adjust your campaigns on the fly. Plus, with features like ad extensions and remarketing, you can engage with customers at every stage of the buying journey, from awareness to conversion.

                    </p>
                    <div className='d-flex py-2 align-items-center justify-center py-2'>
                        <Button className='btn2 text-center'>Get in Touch</Button>
                    </div>
                </Col>
                <Col md={5} className='d-flex justify-content-center align-items-center'>

                    <img src="/Image/sem1 (4).png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center gap-5 py-5'>
            <h2 className='text-center hed2'>Type of Google Ads</h2>
            <Col md={10}>
            <div>
            <div className='d-flex items-center justify-center gap-5'>
            <div className='google-ads-section d-md-flex d-none flex-col'>
            <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
            <img src="Image/SEM-G-1 (9).png" alt="" className='img-fluid w-20'  />
            </div>
            <div className='px-2 '> 
            <h3 className='hed3 text-[#3b7fbf] text-center'>Search</h3>
            <p  className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
            <p className='para text-center'>Promoting links realted to
            user search queries</p>
            </div>
            </div>
            <div className='google-ads-section'>
            <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
            <img src="Image/SEM-G-1 (8).png" alt="" className='img-fluid w-20'  />
            </div>
            <div className='px-2'> 
            <h3 className='hed3 text-[#3b7fbf] text-center'>Display</h3>
            <p  className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
            <p className='para text-center'>Reaching users on sites they
            already visit</p>
            </div>
            </div>
            <div className='google-ads-section'>
            <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
            <img src="Image/SEM-G-1 (6).png" alt="" className='img-fluid w-20'  />
            </div>
            <div className='px-2'> 
            <h3 className='hed3 text-[#3b7fbf] text-center'> Shopping</h3>
          
            <p  className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
            <p className='para text-center'>Reaching users on sites they
            already visit</p>
            </div>
            </div>

            </div>
            <div className='d-flex items-center justify-center gap-5 mt-5'>
            <div className='google-ads-section d-md-flex d-none flex-col'>
            <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
            <img src="Image/SEM-G-1 (1).png" alt="" className='img-fluid w-20'  />
            </div>
            <div className='px-2'> 
            <h3 className='hed3 text-[#3b7fbf] text-center'>Video</h3>
            <p  className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
            <p className='para text-center'>Promoting links realted to
            user search queries</p>
            </div>
            </div>
            <div className='google-ads-section'>
            <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
            <img src="Image/SEM-G-1 (7).png" alt="" className='img-fluid w-20'  />
            </div>
            <div className='px-2'> 
            <h3 className='hed3 text-[#3b7fbf] text-center'>App</h3>
            <p  className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
            <p className='para text-center'>Reaching users on sites they
            already visit</p>
            </div>
            </div>
            <div className='google-ads-section'>
            <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
            <img src="Image/SEM-G-1 (5).png" alt="" className='img-fluid w-20'  />
            </div>
            <div className='px-2'> 
            <h3 className='hed3 text-[#3b7fbf] text-center'>Discovery</h3>
          
            <p  className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
            <p className='para text-center'>Reaching users on sites they
            already visit</p>
            </div>
            </div>

            </div>
            <div className='d-md-flex d-none  items-center justify-center gap-5 mt-5'>
            <div className='google-ads-section'>
            <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
            <img src="Image/SEM-G-1 (2).png" alt="" className='img-fluid w-20'  />
            </div>
            <div className='px-2'> 
            <h3 className='hed3 text-[#3b7fbf] text-center'>Local Services</h3>
            <p  className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
            <p className='para text-center'>Promoting links realted to
            user search queries</p>
            </div>
            </div>
            <div className='google-ads-section'>
            <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
            <img src="Image/SEM-G-1 (4).png" alt="" className='img-fluid w-20'  />
            </div>
            <div className='px-2'> 
            <h3 className='hed3 text-[#3b7fbf] text-center'>Performance Max</h3>
            <p  className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
            <p className='para text-center'>Reaching users on sites they
            already visit</p>
            </div>
            </div>
            <div className='google-ads-section'>
            <div className='bg-[#3b7fbf] d-flex align-items-center justify-center'>
            <img src="Image/SEM-G-1 (3).png" alt="" className='img-fluid w-20'  />
            </div>
            <div className='px-2'> 
            <h3 className='hed3 text-[#3b7fbf] text-center'> Smart</h3>
          
            <p  className='para text-[#3b7fbf] text-center '>BEST FOR:</p>
            <p className='para text-center'>Reaching users on sites they
            already visit</p>
            </div>
            </div>

            </div>
            </div>

            </Col>

            </Row>
            <Row className='justify-content-center align-items-center gap-5 py-5 bgsection-homepage-sem '>
            <Col md={5}>
                <h2 className='hed2 text-center'>Retargeting & Remarketing?</h2>
                <p className='para text-justify'>   Retargeting and remarketing are powerful strategies in PPC marketing that help advertisers to reconnect with users who have previously interacted with your website or shown interest in your products or services. At Razobyte, we leverage advanced retargeting and remarketing techniques to re-engage these users and guide them towards conversion. Retargeting, also known as remarketing, involves displaying targeted ads to users who have visited your website but have not completed a desired action, such as making a purchase or filling out a contact form. By placing a tracking pixel on your website, we can track these users as they browse the web and show them relevant ads across various platforms and websites they visit.

                </p>
                <div className='d-flex py-2 align-items-center justify-center py-2'>
                    <Button className='btn2 text-center'>Get in Touch</Button>
                </div>
            </Col>
            <Col md={5} className='d-flex justify-content-center align-items-center'>

                <img src="/Image/sem-sec.png" alt="" className='img-fluid' />
            </Col>
        </Row>
        <Row className='justify-content-center align-items-center gap-5 py-5'  >
        <Col md={5}>
            <h2 className='hed2 text-center'>Planned approach with 
            Analytics</h2>
            <p className='para text-justify'>The hype surrounding PPC isn't just hype – it's well-deserved praise for a marketing strategy that delivers tangible results. PPC offers unparalleled targeting options, real-time tracking and analytics, and the flexibility to adjust your campaigns on the fly. Plus, with features like ad extensions and remarketing, you can engage with customers at every stage of the buying journey, from awareness to conversion.

            </p>
            
            <div className='d-flex py-2 align-items-center justify-center py-2'>
                <Button className='btn2 text-center'>Get in Touch</Button>
            </div>
        </Col>
        <Col md={5} className='d-flex justify-content-center align-items-center'>
            <img src="/Image/sem-sec2.png" alt="" className='img-fluid' />
        </Col>
    </Row>
        

            <Row className=' d-md-flex d-none justify-content-center align-items-center gap-5 py-5 '
            style={{ backgroundImage: "url('Image/e-bgh.png')",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"1000px" }}
            >
                {/* First image for large screens */}
                <Col md={10}>
                <div className='d-flex items-center justify-center gap-5'>
                <div className=' col-md-5 d-none d-sm-flex justify-content-center align-items-center'>
                    <img src="/Image/sem1 (3).png" alt="" className='img-fluid' />
                </div>
                {/* Content for all screens */}
                <div >
                    <h2 className='text-center hed2 text-light'>Who is it for?</h2>
                    <p className=' text-justify  text-light'>
                    PPC is for any business looking to boost their online visibility, drive traffic to their website, and increase sales or leads. Whether you're a small local business or a global enterprise, PPC is not bound for specific subset of businesses and can be tailored to your needs and budget. At Razobyte, we work with businesses of all sizes and industries, crafting customized PPC strategies that deliver measurable results.
                    </p>
                    <div className='d-flex align-items-center justify-center py-2'>
                        <Button className='btn-whitebg'>Get in touch</Button>
                    </div>


                </div>
                {/* Second image for small screens */}
                <div className="d-sm-none col-md-5">
                    <img
                        src="/Image/sem1 (3).png"
                        alt=""
                        className="img-fluid"

                    />
                </div>
                </div>
                <div className='d-flex items-center justify-center gap-5 py-5'>
                <div className=' col-md-5 d-sm-none  d-flex justify-content-center align-items-center'>
                    <img src="/Image/sem1 (2).png" alt="" className='img-fluid' />
                </div>
                {/* Content for all screens */}
                <div >
                    <h2 className='text-center hed2 text-light'>Which  Ad to choose</h2>
                    <p className=' text-justify  text-light'>
                    When it comes to PPC, choosing the right ad format is crucial for success. From search ads that appear at the top of Google search results to display ads that target users as they browse the web, there are plenty of options to consider. Our team of PPC experts will help you select the ad formats that best align with your business goals and target audience, ensuring maximum impact and ROI.

                    </p>
                    <div className='d-flex align-items-center justify-center py-2'>
                        <Button className='btn-whitebg'>Get in touch</Button>
                    </div>


                </div>
                {/* Second image for small screens */}
                <div className="d-md-flex d-none col-md-5">
                    <img
                        src="/Image/sem1 (2).png"
                        alt=""
                        className="img-fluid"

                    />
                </div>
                </div>

                </Col>
            </Row>
            <Row className=' d-sm-none d-flex justify-content-center align-items-center gap-5 py-5 '
            style={{ background: "linear-gradient(to bottom ,#3B7FBF, #4ECFFF)" }}
            >
                {/* First image for large screens */}
                <Col md={10}>
                <div className='d-md-flex items-center justify-center gap-5'>
                <div className=' col-md-5 d-none d-sm-flex justify-content-center align-items-center'>
                    <img src="/Image/sem1 (3).png" alt="" className='img-fluid' />
                </div>
                {/* Content for all screens */}
                <div >
                    <h2 className='text-center hed2 text-light'>Who is it for?</h2>
                    <p className=' text-justify  text-light'>
                    PPC is for any business looking to boost their online visibility, drive traffic to their website, and increase sales or leads. Whether you're a small local business or a global enterprise, PPC is not bound for specific subset of businesses and can be tailored to your needs and budget. At Razobyte, we work with businesses of all sizes and industries, crafting customized PPC strategies that deliver measurable results.
                    </p>
                    <div className='d-flex align-items-center justify-center py-2'>
                        <Button className='btn-whitebg'>Get in touch</Button>
                    </div>


                </div>
                {/* Second image for small screens */}
                <div className="d-sm-none col-md-5 pt-5">
                    <img
                        src="/Image/sem1 (3).png"
                        alt=""
                        className="img-fluid"

                    />
                </div>
                </div>
                <div className='d-md-flex items-center justify-center gap-5 py-5'>
                
                {/* Content for all screens */}
                <div >
                    <h2 className='text-center hed2 text-light'>Which  Ad to choose</h2>
                    <p className=' text-justify  text-light'>
                    When it comes to PPC, choosing the right ad format is crucial for success. From search ads that appear at the top of Google search results to display ads that target users as they browse the web, there are plenty of options to consider. Our team of PPC experts will help you select the ad formats that best align with your business goals and target audience, ensuring maximum impact and ROI.

                    </p>
                    <div className='d-flex justify-center align-items-center py-2'>
                        <Button className='btn-whitebg'>Get in touch</Button>
                    </div>


                </div>
                {/* Second image for small screens */}
                <div className="d-flex d-sm-none col-md-5 pt-5">
                    <img
                        src="/Image/sem1 (2).png"
                        alt=""
                        className="img-fluid"

                    />
                </div>
                </div>

                </Col>
            </Row>
           
            <Row className='justify-content-center align-items-center gap-5 py-5'>
                {/* First image for large screens */}
                <Col md={5} className='d-none d-sm-flex justify-content-center align-items-center'>
                    <img src="/Image/sem1 (1).png" alt="" className='img-fluid' />
                </Col>
                {/* Content for all screens */}
                <Col md={5} >
                    <h2 className='text-center hed2'>Need experts? Call Razobyte!</h2>
                    <p className='para text-justify'>
                    PPC is a dynamic and effective marketing strategy that can propel your business to new heights. With Razobyte's PPC services, you'll harness the power of targeted advertising to reach your ideal customers and achieve your marketing objectives. Ready to take your online presence to the next level? Contact us today to learn more about our PPC solutions and how we can help your business thrive in the digital era
                    </p>
                </Col>
                {/* Second image for small screens */}
                <Col md={5} className="d-sm-none">
                    <img
                        src="/Image/sem1 (1).png"
                        alt=""
                        className="img-fluid"

                    />
                </Col>
            </Row>
            <Row className='flex justify-content-center align-items-center py-5'>
                <Col md={10}>
                    <h2 className='hed2 text-center'>Top SEM Projects</h2>
                    <div className='d-flex justify-content-center align-items-center gap-[150px] py-5'>
                        <div className='Semproj-shadow'>
                            <img src="Image/Sem-top-pr-1.png" alt="" className='img-fluid w-50' />
                            <img src=" Image/Sem-top-pr-2.png" alt="" className='img-fluid w-50' />
                        </div>
                        <div className='Semproj-shadow d-md-flex d-none'>
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                                <img src="Image/image 2 (1).png" alt="" className='img-fluid w-50' />
                                <img src="Image/img (11).png" alt="" className='img-fluid w-50' />
                                <img src="Image/img (13).png" alt="" className='img-fluid w-50' />

                            </div>
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                                <img src="Image/img (9).png" alt="" className='img-fluid w-50' />
                                <img src="Image/img (12).png" alt="" className='img-fluid w-50' />
                                <img src="Image/img (15).png" alt="" className='img-fluid w-50' />


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
                        <img src="/Image/Sem-project.png" alt="" className='img-fluid w-50' />
                        <p className='para pt-3 text-center'>Search Engine Optimization</p>
                    </div>

                </Col>

            </Row>

            <Blog  title="Blogs"/>
            <Row style={{ backgroundColor: "#5e5e5e" }} className='d-flex justify-content-center align-items-center '>
                <Col md={10} className='d-flex justify-content-center align-items-center gap-md-5  py-3'
                >
                    <p className='para text-white'>Getting Your Dream Design is no sweat. a simple mouse click is all you need to get</p>


                    <Button variant='dark' className='btn1'>Click Here</Button>
                </Col>
            </Row>

        </>

    )
}