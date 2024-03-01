
import {Row,Col} from 'react-bootstrap';

export default function Banner(){
    return(
        <>
        <Row className='d-flex justify-content-center align-items-center'
        style={{
            backgroundImage: "linear-gradient(rgba(0,0,0), rgba(0,0,0,0.2)), url(Image/client-1.jpg)",
            height:"70vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"
          }}
>          
        <Col md className='d-flex justify-content-center align-items-center'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <h2 className='hed1  text-white text-center'>Our Clients</h2>
        <p className='para text-white text-center '>We are trusted by small to mid-sized organizations, 
        Fortune 5000 companies,  
        and major brands to advance their technology objectives through custom  
        software solutions.</p>
        </div>
        </Col>


        </Row>
        

        </>
    )
}