import {Row,Col} from 'react-bootstrap'

export default function Banner(){
    return(
        <>
        <Row className='d-flex justify-content-center align-items-center' 
        style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(Image/php-1.jpg)",
            height:"70vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"
          }}>

        <Col md className='d-flex  flex-col justify-content-center align-items-center' >
        <h2 className='hed1 text-white'>Custom PHP Development Services</h2>
        <p className='hed3 text-white text-center'>Custom PHP web development company to take your business to the next level and drive large-scale transformation.</p>
        

        </Col>
        </Row>

        </>
    )
}