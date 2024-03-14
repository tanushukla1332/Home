
import { Row, Col, Card, CardBody, Carousel, CardImg, CardTitle, CardText } from 'react-bootstrap'
import '../Testominals/Testomnials.css';
export default function Testominials() {
    return (
        <Row className='py-5 justify-content-center align-items-center bg-[#3b7fbf]' >
    
            <div className='text-center'>
                <h3 className='hed2 text-light'>TESTIMONIALS</h3>
                <p className='para text-light'>Don’t Go only with our commitments : Here what our clients says about us:</p>
            </div>
            <Col md ={10} className='d-flex justify-content-center align-items-center testominialsindicators' >
                <Carousel indicators={true}>
                    <Carousel.Item>
                               <div className='flex items-center justify-center gap-3'>
                               <Card className='card-main-Testominals d-md-flex d-none foripad'>
                               <CardBody>
                                   <CardTitle>
                                       <div className="cardinnerdata">
                                           <div className='review p-0'>
                                               <h4 className='hed3'>Alvin Hong</h4>
                                               <h5 className='para'>Manager</h5>
                                               <div className='d-flex  items-center justify-center p-0'>
                                               <img src="Image/star 3.png" alt="" className='img-fluid ' />
                                               <img src="Image/star 3.png" alt="" className='img-fluid' />
                                               <img src="Image/star 3.png" alt="" className='img-fluid' />
                                               <img src="Image/star 3.png" alt="" className='img-fluid' />
                                               <img src="Image/star 3.png" alt="" className='img-fluid' />
                                           </div>
                                              
                                           </div>
                                           <div className='card-img-testominials'>
                                               <CardImg src='Image/lar-7.png' fluid
                                               />
                                           </div>

                                       </div>


                                   </CardTitle>
                                   <CardText>
                                       <div>
                                           <img src="Image/inverted-commas 1.png" alt="" className='img-fluid w-5'  />
                                       </div>
                                       <p className='para'>The SEO and PPC service have been fantastically executed and delivered the Top ranking of my website. All the best</p>
                                   </CardText>
                               </CardBody>
                           </Card>
                   
                           <Card className='card-main-Testominals'>
                               <CardBody>
                                   <CardTitle>
                                       <div className="cardinnerdata">
                                           <div className='review p-0'>
                                               <h4 className='hed3'>Eunice Yong</h4>
                                               <h5 className='para'>Director</h5>
                                               <div className='d-flex   items-center justify-center p-0'>
                                                   <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                   <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                   <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                   <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                   <img src="Image/star 3.png" alt="" className='img-fluid' />
                                               </div>


                                           </div>
                                           <div className='card-img-testominials'>
                                               <CardImg src='Image/Raseo-Technology-Solutions.jpg' fluid
                                               />
                                           </div>

                                       </div>

                                   </CardTitle>
                                   <CardText>
                                       <div>
                                           <img src="Image/inverted-commas 1.png" alt="" className='img-fluid w-5'  />
                                       </div>
                                       <p className='para'>They have been very good to boost my business through SEO campaign and Google adwords, thanks</p>
                                   </CardText>
                               </CardBody>
                           </Card>
                               </div>
                      
                    
                    </Carousel.Item>
                    <Carousel.Item>
                                <Card className='card-main-Testominals'>
                                    <CardBody>

                                        <CardTitle>
                                            <div className="cardinnerdata">
                                                <div className='review p-0'>
                                              
                                                <h4 className='hed3'>Eric Lim</h4>
                                                <h5 className='para'>Owner</h5>                                                   
                                                    <div className='d-flex  p-0  items-center justify-center'>
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                </div>
                                                   
                                                </div>
                                                <div className='card-img-testominials'>
                                                    <CardImg src='Image/Eric-yong.jpg' fluid
                                                    />
                                                </div>

                                            </div>


                                        </CardTitle>


                                        <CardText>
                                            <div className='p-0'>
                                                <img src="Image/inverted-commas 1.png" alt="" className='img-fluid w-5' />
                                            </div>
                                            <p className='para' >They are at their words in terms of providing service and support!! all the best.</p>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            
                    </Carousel.Item>
                    <Carousel.Item>
                       <Card className='card-main-Testominals'>
                               <CardBody>
                                   <CardTitle>
                                       <div className="cardinnerdata">
                                           <div className='review p-0'>
                                               <h4 className='hed3'>Alvin Hong</h4>
                                               <h5 className='para'> manager</h5>
                                               <div className='d-flex items-center justify-center  p-0'>
                                               <img src="Image/star 3.png" alt="" className='img-fluid ' />
                                               <img src="Image/star 3.png" alt="" className='img-fluid' />
                                               <img src="Image/star 3.png" alt="" className='img-fluid' />
                                               <img src="Image/star 3.png" alt="" className='img-fluid' />
                                               <img src="Image/star 3.png" alt="" className='img-fluid' />
                                           </div>
                                              
                                           </div>
                                           <div className='card-img-testominials'>
                                               <CardImg src='Image/lar-7.png' fluid
                                               />
                                           </div>

                                       </div>


                                   </CardTitle>
                                   <CardText>
                                       <div>
                                           <img src="Image/inverted-commas 1.png" alt="" className='img-fluid w-5'  />
                                       </div>
                                       <p className='para'>The SEO and PPC service have been fantastically executed and delivered the Top ranking of my website. All the best</p>
                                   </CardText>
                               </CardBody>
                           </Card>
                    
                    </Carousel.Item>
                    <Carousel.Item>
                    <Card className='card-main-Testominals'>
                                    <CardBody >
                                        <CardTitle>
                                            <div className="cardinnerdata">
                                                <div className='review p-0'>
                                                    <h4 className='hed3'>Eric Lim</h4>
                                                    <h5 className='para'>Owner</h5>
                                                    <div className='d-flex  p-0  items-center justify-center'>
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                    <img src="Image/star 3.png" alt="" className='img-fluid' />
                                                </div>
                                                   
                                                </div>
                                                <div className='card-img-testominials'>
                                                    <CardImg src='Image/Eric-yong.jpg' fluid
                                                    />
                                                </div>

                                            </div>

                                        </CardTitle>


                                        <CardText>
                                            <div>
                                                <img src="Image/inverted-commas 1.png" alt="" className='img-fluid w-5'  />
                                            </div>
                                            <p className='para'>They are at their words in terms of providing service and support!! all the best.</p>
                                        </CardText>
                                    </CardBody>

                                </Card>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>

    )
}