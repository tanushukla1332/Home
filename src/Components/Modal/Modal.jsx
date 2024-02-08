import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ReCAPTCHA from "react-google-recaptcha";
import {Form,FormGroup,FormControl,FormCheck,Button} from 'react-bootstrap'


 export default function ModalExample() {
  const [show, setShow] = useState(false);
  const[submitedForm,setSubmittedForm]=useState(false)
  const[verified,setVerified]=useState(false)

  const handleClose=()=>{
    setShow(false)
    setSubmittedForm(false)
  }
  const handleChnage=()=>{
    setVerified(true)


  }

  const HandleSubmit=(event)=>{
    event.preventDefault()
    setSubmittedForm(true)
  }



  useEffect(()=>{
    const interval=setInterval(()=>{
        setShow(true)
    },10000)

     return()=>clearInterval(interval)
   

  },[])



  return (
    <>

    {!show && !submitedForm && (
        <Modal show={show} 
        onHide={handleClose} 
        centered
        className='d-md-flex d-none'
        >
        <Modal.Header closeButton style={{ backgroundColor: "#3b7fbf", textAlign: "center" }}>
          <Modal.Title className='text-light d-flex justify-content-center align-items-center'>
            <h4 className='hed3'>Get In touch</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='justify-content-center align-items-center'>
        <Form className='p-2' onSubmit={HandleSubmit}
                >
                <FormGroup >
                      <FormControl type='text' placeholder='Name*' required  />
                    </FormGroup>
                    <FormGroup  className='d-flex justify-content-center align-items-center pt-3'>
                     <FormControl type='email' placeholder='Email*' required  />
                    </FormGroup>
                    <FormGroup  className='d-flex justify-content-center align-items-center pt-3'>
                      <FormControl type='number' placeholder='Phone*' required  />
                    </FormGroup>
                    <FormGroup className='d-flex justify-content-center align-items-center pt-3'>
                  <FormControl type='text' placeholder='Company*' required  />
                </FormGroup>
                <FormGroup className='d-flex justify-content-center align-items-center pt-3'> 
                <FormControl type='text' placeholder='Company Website*' required  />
            </FormGroup>
                    <FormGroup className='d-flex justify-content-center align-items-center pt-3'>
                     <FormControl as='select' placeholder='Services*' required  >
                            <option value='' selected>Services</option>
                            <option value=''>Development</option>
                            <option value=''>Design</option>
                            <option value=''>Marketing</option>
                            <option value=''>Game Developmentnpm i react-google-recaptcha </option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup className='d-flex justify-content-center align-items-center py-3'>
                 <FormControl type='text' placeholder='Describe your project *' required  />
                </FormGroup>
                        <ReCAPTCHA 
                        sitekey='6LdX-WgpAAAAANoKBsCJ4_sITp90IaMHNQoPqh_D'
                        onChange={handleChnage}
                        className='py-3'
                        />
                    <div className='w-100  d-flex justify-content-center align-items-center'>
                        <Button type="submit" variant='outline-dark' className='btnsubmit' 
                        >Submit </Button>
                    </div>                    
                </Form>
    </div>
        </Modal.Body>



      </Modal>

    )}

     
    </>
  );
}
