
import { Row, Col, Button } from 'react-bootstrap'
import '../Main/Main.css'
import { useNavigate } from 'react-router'

export default function Main() {
  const navigate = useNavigate()
  return (
    <>


      <Row className=' px-0 justify-content-center  align-items-center  py-3' style={{ background: "linear-gradient(to right, #3b7fbf25 , #3b7fbf42  )"}}>
        <Col md={6} className='d-flex justify-content-center align-items-center'>
          <div className='Pormainsec-text'>
            <h2 className='hed2' style={{color:"#3b7fbf"}}>we must design for the way people behave,not for how we wuld to wish them behave"
            </h2>
            <h3 className='hed2' style={{color:"#3b7fbf"}}>~Don norman (The Father Of UX)</h3> 
            <div className='port-button'>
            <Button onClick={() => navigate('/template')}>Know More</Button>
            </div>
          </div>
        </Col>
        <Col md={3} className='d-md-flex  d-none justify-content-center align-items-center'>
          <img src="Image/port-2.png" alt=""  className='img-fluid'/>
        </Col>
      </Row>
      <Row className='justify-content-center py-5 align-items-center'>
        <Col md={10}>
          <div className='Por1-text'>
            <h3>Building what the world needs</h3>
            <p>We believe constant evolution is the path toward being the best. We at Razobyte are constantly looking for ways to get better and deliver more than
              what the clients expect. With fast-paced trends and deep-rooted principles, we work to create a symphony that soothes the eyes that behold it. We
              do not believe in strict departmentalization, as it is the combination of minds with different backgrounds, strengths, and skills, that produces a
              result far better than a room filled with like-minded people who have a single-track mind.
            </p>
            <span>
              Have a look at what we have done and envision what we can do for you, and we will deliver better.</span>
          </div>
        </Col>
      </Row>
    </>
  )
}