import Banner from "./Banner/Banner";
import Section from "./Section/Section";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Testominials from "../../../HomePages/Testominals/Testomnials";
import {Row,Col,Button}  from 'react-bootstrap';

export default function Clients(){
    return(
        <>
        <Banner/>
        <Section/>
        <Testominials/>
        <Row className='flex justify-content-center align-items-center py-4'>
        <h3 className='hed2 text-center'>Our Work Speaks for Itself</h3>
        <Col md ={10}>
        <div className='d-md-flex items-center justify-center'>
        <div>
        <img src="Image/clie-3 (3).png" alt=""  className='img-fluid'/>
        <h3 className='para text-center  font-[600]' style={{color:"#3b7fbf"}}>WEB-BASED APP DEVELOPMENT</h3>
        <div className='flex items-center justify-center'>
        <Button className='read-case-study'>Read-case-study  <RiArrowRightDoubleLine /></Button>
        </div>
       

        </div>
        <div>
        <img src="Image/clie-3 (2).png" alt=""    className='img-fluid'/>
        <h3 className='para text-center  font-[600] ' style={{color:"#3b7fbf"}}>MOBILE APP DEVELOPMENT</h3>
        <div className='flex items-center justify-center'>
        <Button className='read-case-study'>Read-case-study <RiArrowRightDoubleLine /> </Button>
        </div>

        </div>
        <div>
        <img src="Image/clie-3 (1).png" alt=""  className='img-fluid'/>
        <h3 className='para text-center  font-[600]' style={{color:"#3b7fbf"}}>CUSTOM INTEGRATIONS AND 
        ANALYTICS</h3>
        <div className='flex items-center justify-center'>
        <Button className='read-case-study'>Read-case-study <RiArrowRightDoubleLine /></Button>
        </div>

        </div>

        </div>

        </Col>
        </Row>
        </>
    )
}