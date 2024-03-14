
import Banner from "../../Banner/Banner";
import { Row, Col,Carousel } from 'react-bootstrap';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import '../FirstBlogpage/FirstBlog.css'

export default function FirstBlog() {

    return (
        <>
            <Banner />
            <Row
                className="px-0 py-5  justify-content-center gap-5"
                style={{ backgroundColor: "rgba(90, 161, 227, 0.322)" }}  >
                <Col md={7} className="d-flex flex-column align-items-center py-5 justify-content-center">
                     <div>
                        <div>
                            <h3 className="hed2 fw-bold text-center">Visual Impact</h3>
                            <p className="para text-justify">
                                At Razobyte, we believe “First impression is last impression”. From the
                                moment a user presses enter, their perception of the website as well as
                                the brand starts to form. Every aspect of the visual triggers an emotion
                                and accounts for the overall experience of the user.
                            </p>
                        </div>
                        <div className="d-flex flex-column align-items-center py-3 justify-content-center">
                            <img src="Image/image 2.png"
                                className="img-fluid text-center"
                                alt=""
                            />
                        </div>
                   </div>

                    <div className="px-0 ">
                        <div
                            className="py-5 ">
                            <h3 className="hed2 fw-bold text-center">
                                User-Centric Approach
                            </h3>
                            <p className="para  text-justify ">
                                As per Don Norman, the father of User Experience, every design should be
                                made to cater to the user keeping how they behave in mind. This user-
                                centric approach makes the design much more accessible and appealing to
                                the user and as the saying goes, “A happy client is the best client”
                            </p>
                        </div>
                        <div className="d-md-flex flex-column align-items-center justify-content-center py-3">
                            <img src="Image/approach.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="px-0">
                        <div
                            className="py-5"
                          
                        >
                            <h3 className="hed3 fw-bold text-center">
                                Mobile Responsiveness
                            </h3>
                            <p className="para text-muted text-justify">
                                With the increasing no. of users taking mobile and tablet devices as
                                their primary devices, the mobile responsiveness factor is becoming
                                increasingly important every day. With a variety of different sizes of
                                mobile devices, it is important to ensure mobile responsiveness in every
                                device.
                            </p>
                        </div>
                        <div className=" d-flex justify-content-center  align-items-center py-3">
                            <img
                                src="Image/Untitled-1 1 (2).png"
                                className="img-fluid shadow-sm rounded-2 "
                                alt=""
                            />
                        </div>
                    </div>
                </Col>
                <Col md={3} className=" py-5 coldiv">
                <div className="blog-post-linkallmaindiv "> 
                <h3 className="text-center text-secondary hed3">Other Blogs</h3>
                <ul>
                <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/> <li>Lorem, ipsum dolor.</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight 
                color="#3b7fbf" size={25}/> <li>Lorem, ipsum dolor.</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight
                color="#3b7fbf" size={25} /> <li>Lorem, ipsum dolor.</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight 
               color="#3b7fbf" size={25}/> <li>Lorem, ipsum dolor.</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight
                color="#3b7fbf" size={25} /> <li>Lorem, ipsum dolor.</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight
                color="#3b7fbf" size={25} /> <li>Lorem, ipsum dolor.</li></div>
               
              
                </ul>
        
                </div>
                <div className="blog-post-linkallmaindiv "> 
                <h3 className="text-center text-secondary">Other links</h3>
                <ul>
                <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/> <li>Lorem, ipsum dolor.</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight 
                color="#3b7fbf" size={25}/> <li>Lorem, ipsum dolor.</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight
                color="#3b7fbf" size={25} /> <li>Lorem, ipsum dolor.</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight 
               color="#3b7fbf" size={25}/> <li>Lorem, ipsum dolor.</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight
                color="#3b7fbf" size={25} /> <li>Lorem, ipsum dolor.</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight
                color="#3b7fbf" size={25} /> <li>Lorem, ipsum dolor.</li></div>
               
              
                </ul>
        
                </div>
                <div className="blog-post-linkallmaindiv "> 
                <h3 className="text-center text-secondary">Other Post</h3>
                <ul>
                <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/> <li>Lorem, ipsum dolor.</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight 
                color="#3b7fbf" size={25}/> <li>Lorem, ipsum dolor.</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight
                color="#3b7fbf" size={25} /> <li>Lorem, ipsum dolor.</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight 
               color="#3b7fbf" size={25}/> <li>Lorem, ipsum dolor.</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight
                color="#3b7fbf" size={25} /> <li>Lorem, ipsum dolor.</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight
                color="#3b7fbf" size={25} /> <li>Lorem, ipsum dolor.</li></div>
               
              
                </ul>
        
                </div>
                </Col>
              

            </Row>



        </>
    )




}