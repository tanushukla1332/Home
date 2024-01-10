import { Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import '../Count/Count.css'


export default function Count({ clients }) {
    return (
        <>
            <Row>
                <Col md={12} className='col-count'>
                    <div className='clients-card2'>
                        <div className='count-img'>
                            <img src="Image/Mask group (1).png" alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>
                                {clients &&
                                    <CountUp start={0} end={98} duration={3} delay={0} />
                                }

                                %</h5>

                            <p>Clients Satisfied</p>
                        </div>
                    </div>
                    <div className='clients-card2'>
                        <div className='count-img'>
                            <img src="Image/Mask group (2).png" alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>{
                                clients &&
                                <CountUp start={0} end={395} duration={3} delay={0} />
                            }
                                +
                            </h5>
                            <p>Successful Project</p>
                        </div>
                    </div>
                    <div className='clients-card2'>
                        <div className='count-img'>
                            <img src="Image/Mask group (3).png" alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>
                                {clients &&
                                    <CountUp start={0} end={4} duration={3} delay={0} />}
                                M+</h5>
                            <p>Lines of Code</p>
                        </div>
                    </div>
                    <div className='clients-card2'>
                        <div className='count-img'>
                            <img src="Image/Mask group (4).png" alt="" className='img-fluid' />
                        </div>
                        <div>
                            <h5>
                                {clients &&
                                    <CountUp start={0} end={8} duration={3} delay={0} />}
                                +</h5>
                            <p>Years of Excellence</p>
                        </div>
                    </div>
                </Col>

            </Row>


        </>
    )
}
