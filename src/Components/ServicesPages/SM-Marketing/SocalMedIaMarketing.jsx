import {Row,Col,Button} from 'react-bootstrap'
import Blog from '../../HomePages/Blog/Blog2';
import { useNavigate } from 'react-router';

export default function SocialMediaMarketing(){
    const navigate=useNavigate()
    return(
        <>
        <Row className='flex items-center justify-center'
        style={{backgroundImage:"url('Image/Social-Media-banner.png')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center" ,height:"300px"}}
        >
        <Col md>
        <div className='flex items-center'>
        <h1 className='hed1 text-white'>Social Media Marketing</h1>
        </div>
        </Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center py-5'

        style={{backgroundImage:"url('Image/blue.png')",backgroundRepeat:"no-repeat",backgroundSize:"600px",backgroundPosition:"right"}}

        >
        <Col md={10}>
        <div className='d-flex align-items-center justify-content-center gap-5'>
        <div>
        <h2 className='hed2'>Facebook Ads</h2>
        <p className='para text-justify'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className='flex items-center justify-center py-3'>
    <Button className='btn2'>Get in touch </Button>
    </div>

        </div>
        <div className='col-md-6 d-flex align-items-center justify-content-center'>
        <img src="Image/so-med-1 (6).png" alt="" className='img-fluid'/>
        </div>
        </div>
        </Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center py-5 bg-[#59a0e333]'>
        <Col md={10} >
        <div className='d-flex align-items-center justify-content-center gap-5'>

        <div className='col-md-6 d-flex align-items-center justify-content-center'>
        <img src="Image/so-med-1 (5).png" alt="" className='img-fluid'/>
        </div>
        <div>
        <h2 className='hed2'>Instagram Ads</h2>
        <p className='para text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='flex items-center justify-center py-3'>
    <Button className='btn2'>Get in touch </Button>
    </div>


        </div>
      
        </div>
        </Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center py-5'>
        <Col md={10}>
        <div className='d-flex align-items-center justify-content-center gap-5'>
        <div>
        <h2 className='hed2'>LinkedIn Ads</h2>
        <p className='para text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='flex items-center justify-center py-3'>
    <Button className='btn2'>Get in touch </Button>
    </div>


        </div>
        <div className='col-md-6 d-flex align-items-center justify-content-center'>
        <img src="Image/so-med-1 (4).png" alt="" className='img-fluid'/>
        </div>
        </div>
        </Col>
        </Row>
        <Row className='flex justify-content-center align-items-center py-5 '
        // style={{backgroundImage:"url('Image/UI-banner.png')",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}
        style={{background:"linear-gradient(to bottom, rgba(59,127,191), rgba(78,207,255))"}}

        
        >
       
        <Col md={10}>
        <div className='flex justify-content-center align-items-center gap-5'>
        <div className=' col-md-6 flex justify-content-center align-items-center ' >
        <img src="Image/so-med-1 (3).png" alt="" className='img-fluid'/>
        </div>
        <div className='flex  flex-col justify-content-center'>
        <h2 className='hed2 text-white'>Twitter Ads</h2>
        <p className='para text-justify text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='flex items-center justify-center'>
         <Button className='btn-whitebg'>Get in touch </Button>
    </div>

        </div>
   

        
        </div>
        <div className='flex justify-content-center align-items-center gap-5'>
        
        <div className='flex  flex-col justify-content-center'>
        <h2 className='hed2 text-white'>Snapchat Ads</h2>
        <p className='para text-justify text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='flex items-center justify-center'>
        <Button className='btn-whitebg'>Get in touch </Button>
   </div>
        

        </div>
        <div className=' col-md-6 flex justify-content-center align-items-center ' >
        <img src="Image/so-med-1 (3).png" alt="" className='img-fluid'/>
        </div>
   

        
        </div>
          <div className='flex justify-content-center align-items-center gap-5'>
        <div className=' col-md-6 flex justify-content-center align-items-center ' >
        <img src="Image/so-med-1 (3).png" alt="" className='img-fluid'/>
        </div>
        <div className='flex  flex-col justify-content-center'>
        <h2 className='hed2 text-white'>Twitter Ads</h2>
        <p className='para text-justify text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='flex items-center justify-center '>
        <Button className='btn-whitebg'>Get in touch </Button>
   </div>

        </div>
   

        
        </div>
        </Col>
        
        </Row>
      
   

        
        <Row className='flex justify-content-center align-items-center py-5 bg-[#59a0e333]'

        style={{backgroundImage:"url('Image/grey.png')",backgroundRepeat:"no-repeat",backgroundSize:"700px"}}

        
        >
        <Col md={10}>
        <h2 className='hed2 text-center'>Top Soical Media Projects</h2>  
        <div className='d-flex justify-content-center align-items-center gap-[150px] py-5' >
        <div className='Semproj-shadow'>
        <img src="Image/Sem-top-pr-1.png" alt="" className='img-fluid'/>
        <img src=" Image/Sem-top-pr-2.png" alt="" className='img-fluid w-50'/>
        </div>
        <div className='Semproj-shadow' 

        
        > 
        <div className='d-flex justify-content-center align-items-center gap-2'>
        <img src="Image/image 2 (1).png" alt=""  className='img-fluid w-50' />
        <img src="Image/img (11).png" alt=""  className='img-fluid w-50'/>
        <img src="Image/img (13).png" alt=""  className='img-fluid w-50'/>
        
        </div>
        <div className='d-flex justify-content-center align-items-center gap-2'>
        <img src="Image/img (9).png" alt=""  className='img-fluid w-50'/>
        <img src="Image/img (12).png" alt=""  className='img-fluid w-50'/>
        <img src="Image/img (15).png" alt=""  className='img-fluid w-50'/>
        

        </div>
        </div>
        
        </div>
        </Col>
        </Row> 
        <Row className='d-flex justify-content-center align-items-center py-5'>
        <Col md={5} className='d-flex justify-content-center align-items-center mb-3'>
            <div className='custom2-shadow'>
                <img src="/Image/Sem-last.png" alt="" className='img-fluid w-50'/>
                <p className='para pt-2 text-center'> Social Media Optimization</p>
            </div>
        </Col>
        <Col md={5} className='d-flex justify-content-center align-items-center mb-3 '>
            <div className='custom2-shadow'>
            <img src="/Image/Search-projects2.png" alt="" className='img-fluid w-50' />
            <p className='para pt-2 text-center cursor-pointer' onClick={() => navigate('/socialMedia')}> Social Media Strategy</p>
            </div>

        </Col>

    </Row> 
    <Blog/>
    <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center align-items-center'>
    <Col md={12} className='flex items-center justify-center gap-5 py-3'>
        <p className='para text-white'>Interested in a little more details, let us know how we can assist you Button</p>
        <Button variant='dark' className='btn-last-banner-contact-Us'>Contact-us</Button>
    </Col>
</Row>
        </>
    )
}