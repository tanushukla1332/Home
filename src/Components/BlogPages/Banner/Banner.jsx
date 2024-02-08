import {Row,Col} from 'react-bootstrap'
export default function Banner(){
    return(
        <>
        <Row  className='d-sm-flex justify-content-center align-items-center'
        >
        <Col md ={12} className='Mainrodiv' style={{backgroundImage:"url('Image/BLOG-1.jpg')",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"
    }}>
        <div>
        <h1 className='hed1'>Welcome to Our Blog page</h1>
        </div>
        </Col>
        </Row>

        </>
    )
}