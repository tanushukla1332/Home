import {Row,Col} from 'react-bootstrap'
import { CiHome } from "react-icons/ci";
import '../MainTemplate/Main.css'

export default function Main(){
    return(
        <>
        <Row className='justify-content-center align-items-center bgSection gap-5'>
        <Col md={7}>
        <div className='Temp1-textMain'>
        <h2>BLUE ILLUSION</h2>
        <ul className='d-md-flex gap-3'>
        <li><CiHome fontSize={25} /></li>
        <li>Home</li>
        <li>Project</li>
        <li>E-Commerce Development</li>
        </ul>
        </div>
        <div>
        <img src="Image/tem-1.png" alt="" className='img-fluid' />
        </div>

        </Col>
        <Col md={4} className='pt-5 d-md-flex align-items-center justify-content-center'>
        <img src="Image/Temp-2.png" alt="" className='img-fluid' />
        </Col>
        </Row>

        </>
    )
}