
import { Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import '../SectionsCar/SectionCar.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


export default function CarSection() {
    return (
        <>
            <Row className='justify-content-center align-items-center py-5'>
                <Col md={10}>
                    <div className='Sec1-txt py-3'>
                        <h3>What’s Inside</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book.</p>
                    </div>
                    <div className='d-md-flex gap-4'>
                        <div className='sec2-txt'>
                            <img src="Image/car-2.png" alt="" style={{ backgroundColor: "#3B7FBF", borderRadius: "50%", padding: "5px" }} />
                            <h3>Growth Centric Culture</h3>
                            <p>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and
                                a type specimen book.</p>
                        </div>
                        <div className='sec2-txt2 mt-3'>
                            <img src="Image/car-3.png" alt="" style={{ backgroundColor: "#FFFF", borderRadius: "50%", padding: "5px" }} />
                            <h3>Work-Life Balance</h3>
                            <p>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and
                                a type specimen book.</p>

                        </div>
                        <div className='sec2-txt mt-3'>
                            <img src="Image/car-4.png" alt="" style={{ backgroundColor: "#3B7FBF", borderRadius: "50%", padding: "5px" }} />
                            <h3>Boredom Not-Allowed</h3>
                            <p>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and
                                a type specimen book.</p>
                        </div>
                    </div>





                </Col>
            </Row>
            <Row className='justify-content-center align-items-center py-5'>
                <Col md={10}>
                    <div className='Sec1-txt'>
                        <h3>What we Value</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book.</p>
                    </div>
                    <div>
                        <div className='d-md-flex gap-4 '>
                            <div className='sec3-txt mt-3'>
                                <img src="Image/car-5 (3).png" alt="" style={{ backgroundColor: "#3B7FBF", borderRadius: "50%", padding: "5px" }} />
                                <h3>Creativity</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. LoremIpsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type anda type specimen book.</p>
                            </div>
                            <div className='sec3-txt3 mt-3'>
                                <img src="Image/car-5 (2).png" alt="" style={{ borderRadius: "50%", padding: "5px", backgroundColor: "#FFFF" }} />
                                <h3>Dedication</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. LoremIpsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type anda type specimen book.</p>
                            </div>
                        </div>
                        <div className='d-md-flex gap-4'>
                            <div className='sec3-txt mt-3'>
                                <img src="Image/car-6.png" alt="" style={{ backgroundColor: "#3B7FBF", borderRadius: "50%", padding: "5px" }} />
                                <h3>Innovation</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. LoremIpsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type anda type specimen book.</p>
                            </div>
                            <div className='sec3-txt mt-3'>
                                <img src="Image/car-5 (1).png" alt="" style={{ backgroundColor: "#3B7FBF", borderRadius: "50%", padding: "5px" }} />
                                <h3>Stepping-up</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. LoremIpsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley
                                    of type anda type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center py-3'>
            <h2 className='text-center pb-3 hed2' style={{color:"#5E5E5E"}}>Openings</h2>
                <Col md={10}>
                    <Accordion defaultActiveKey="0" className='main-accrodinstart'>
                        <Accordion.Item eventKey='0' className='main-accrodinstartItem  my-2'>
                            <Accordion.Header className='headersection'>
                                <div className='d-md-flex justify-content-center align-items-center faqheaderstartgap'>
                                    <h3>Digital Marketing Intern</h3>
                                    <p>Gurugram</p>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className='faqbodyitems '>
                            <div className='faqbodyitemstext'>
                            <h3>Digital Marketing Intern</h3>
                            <p>Experience- 5 Years</p>
                            <p>Preferred- e-COmmerce/ Shopify/ Magento/ Big Commerce Preferred</p>
                            <p>Qualification- Bachelor’s degree in Marketing, Communications, or a related field.</p>
                            </div>
                            <div>
                            <ul>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Minimum of 5 years of proven experience as an SEO Specialist.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />In-depth knowledge of SEO tools, Google Analytics, Search Console, GMT, and industry trends.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Proficiency in implementing on-page and off-page SEO best practices.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Strong analytical and problem-solving skills.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Excellent communication and collaboration skills.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Ability to adapt to evolving SEO algorithms and industry changes</li>
                            </ul>
                            </div>
                            </Accordion.Body>

                        </Accordion.Item>
                        <Accordion.Item eventKey='1' className='main-accrodinstartItem my-2'>
                            <Accordion.Header className='headersection'>
                                <div className='d-md-flex justify-content-center align-items-center faqheaderstartgap2'>
                                    <h3>Web Designer Intern</h3>
                                    <p>Delhi</p>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className='faqbodyitems'>
                            <div className='faqbodyitemstext'>
                            <h3>Digital Marketing Intern</h3>
                            <p>Experience- 5 Years</p>
                            <p>Preferred- e-COmmerce/ Shopify/ Magento/ Big Commerce Preferred</p>
                            <p>Qualification- Bachelor’s degree in Marketing, Communications, or a related field.</p>
                            </div>
                            <div>
                            <ul>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Minimum of 5 years of proven experience as an SEO Specialist.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />In-depth knowledge of SEO tools, Google Analytics, Search Console, GMT, and industry trends.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Proficiency in implementing on-page and off-page SEO best practices.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Strong analytical and problem-solving skills.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Excellent communication and collaboration skills.</li>
                            <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Ability to adapt to evolving SEO algorithms and industry changes</li>
                            </ul>
                            </div>
                            </Accordion.Body>

                        </Accordion.Item>
                        <Accordion.Item eventKey='2' className='main-accrodinstartItem my-2'>
                        <Accordion.Header className='headersection'>
                            <div className='d-md-flex justify-content-center align-items-center faqheaderstartgap'>
                                <h3>Software Devlopments</h3>
                                <p>Mumbai</p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className='faqbodyitems '>
                        <div className='faqbodyitemstext'>
                        <h3>Digital Marketing Intern</h3>
                        <p>Experience- 5 Years</p>
                        <p>Preferred- e-COmmerce/ Shopify/ Magento/ Big Commerce Preferred</p>
                        <p>Qualification- Bachelor’s degree in Marketing, Communications, or a related field.</p>
                        </div>
                        <div>
                        <ul>
                        <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Minimum of 5 years of proven experience as an SEO Specialist.</li>
                        <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />In-depth knowledge of SEO tools, Google Analytics, Search Console, GMT, and industry trends.</li>
                        <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Proficiency in implementing on-page and off-page SEO best practices.</li>
                        <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Strong analytical and problem-solving skills.</li>
                        <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Excellent communication and collaboration skills.</li>
                        <li className='d-flex align-itmes-center'><MdKeyboardDoubleArrowRight />Ability to adapt to evolving SEO algorithms and industry changes</li>
                        </ul>
                        </div>
                        </Accordion.Body>

                    </Accordion.Item>
                    </Accordion>


                </Col>

            </Row>
            <Row className=' d-flex justify-content-center align-items-center py-5'>
            <div className='CarLastText'>
            <h3>Life at Razobyte</h3>
            </div>
            <Col md={10}>
            <div className='d-md-flex gap-4 allimages d-flex align-items-center justify-content-center'>
            <div> <img src="Image/car-7 (2).jpg" alt=""  className='img-fluid  mt-3'  /></div>
            <div><img src="Image/car-7 (1).jpg" alt=""  className='img-fluid  mt-3'/></div>
            <div><img src="Image/car-7 (3).jpg" alt=""  className='img-fluid mt-3 ' /></div>
           
            
       
            </div>
       

            </Col>
            </Row>


        </>
    )
}