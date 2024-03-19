
import {Row,Col,Button} from 'react-bootstrap';
import './Email.css'
import Blog from '../../Blog/Blog2';
import { useNavigate } from 'react-router';
export default function Email({title}){
    const navigate=useNavigate()
    return(
        <>
        <Row className='flex items-center justify-center'>
       
        <Col md className='px-0'>
        <img src="Image/Email-banner.png" alt=""  className='img-fluid'/>
      <div className='absolute left-5 top-10 '>
      <h1 className='hed1'>Email Marketing</h1>
      </div>
    
 
        </Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center py-5'

        style={{backgroundImage:"url('Image/blue.png')",backgroundRepeat:"no-repeat",backgroundSize:"600px",backgroundPosition:"right"}}

        >
        <Col md={10}>
        <div className='d-md-flex align-items-center justify-content-center gap-5'>
        <div>
        <h2 className='hed2 text-center'>Data Enrichment</h2>
        <p className='para text-justify'>
        Data is the backbone of any successful email marketing campaign. With our data enrichment services, we help you enhance your existing customer data with valuable insights, such as demographics, behaviour patterns, and purchase history. By leveraging enriched data, you can personalize your email content and tailor your messaging to resonate with your audience's interests and preferences.

        We understand the importance of effective email marketing in driving engagement, nurturing leads, and increasing conversions. campaigns. Let's explore how Razobyte can elevate your email marketing strategy.
        <div className='flex items-center justify-center py-3'>
        <Button className='btn2'>Get in touch </Button>
        </div>
        
        </p>


        </div>
        <div className='col-md-6 d-flex align-items-center justify-content-center'>
        <img src="Image/Email-1 (5).png" alt="" className='img-fluid'/>
        </div>
        </div>
        </Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center py-5 bg-[#59a0e333]'>
        <Col md={10} >
        <div className='d-md-flex align-items-center justify-content-center gap-5'>

        <div className='col-md-6 d-md-flex d-none align-items-center justify-content-center'>
        <img src="Image/Email-1 (4).png" alt="" className='img-fluid'/>
        </div>
        <div>
        <h2 className='hed2 text-center'>Audience Analysis and 
        Segmentation</h2>
        <p className='para text-justify'>Understanding your audience is key to delivering relevant and engaging email content. Our audience analysis and segmentation services enable you to divide your subscriber base into distinct groups based on demographics, interests, and engagement levels. This allows you to send targeted emails that speak directly to the needs and preferences of each segment, ultimately driving higher open and click-through rates.
        </p>
        <div className='flex items-center justify-center py-3'>
        <Button className='btn2'>Get in touch </Button>
        </div>


        </div>
       
        
      
        </div>
        <div className='col-md-6 d-flex d-sm-none align-items-center justify-content-center'>
        <img src="Image/Email-1 (4).png" alt="" className='img-fluid'/>
        </div>
        
        </Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center py-5'>
        <Col md={10}>
        <div className='d-md-flex align-items-center justify-content-center gap-5'>
        <div>
        <h2 className='hed2 text-center'>Cadence preparation</h2>
        <p className='para text-justify'>Finding the right cadence for your email campaigns is essential for maintaining engagement without overwhelming your subscribers. Our cadence preparation services help you develop a strategic email schedule that strikes the perfect balance between staying top-of-mind and respecting your audience's inbox. Whether it's weekly newsletters, monthly promotions, or targeted drip campaigns, we'll help you create a cadence that keeps your subscribers engaged and eager for more
        .</p>
        <div className='flex items-center justify-center py-3'>
        <Button className='btn2'>Get in touch </Button>
        </div>


        </div>
        <div className='col-md-6 d-flex align-items-center justify-content-center'>
        <img src="Image/Email-1 (3).png" alt="" className='img-fluid'/>
        </div>
        </div>
        </Col>
        </Row>
        <Row className=' d-md-flex justify-content-center bgsection2-homepage-smo  align-items-center gap-5 py-3'>

         <Col md={4}>
           <div className="Image-Email d-md-flex d-none">
           <img src="/Image/Email-1 (2).png" alt="" className='img-fluid'/>
           </div>
        </Col>

        <Col md={6}>
            <h2 className='hed2 text-white text-center'>A-B Testing</h2>
            <p className='para text-white ext-justify'>
            Continuous improvement is at the heart of effective email marketing. With our A-B testing services, you can experiment with different email elements, such as subject lines, content, and calls-to-action, to identify what resonates best with your audience. By testing and optimizing your email campaigns, you can improve performance metrics like open rates, click-through rates, and conversion rates, ultimately maximizing the impact of your marketing efforts.
            <div className='d-flex justify-content-center align-items-center py-3'>
            <Button className='btn-3 text-center'>Get in Touch</Button>
        </div>

             </p>
             <div className="Image-Email d-flex d-sm-none">
             <img src="/Image/Email-1 (2).png" alt="" className='img-fluid'/>
             </div>
          
        </Col>
  
    </Row>
    <Row className='d-flex align-items-center justify-content-center py-5'>
    <Col md={10}>
    <div className='d-md-flex align-items-center justify-content-center gap-5'>
    <div>
    <h2 className='hed2 text-center'>E-mail Marketing tools</h2>
    <p className='para text-justify'>Choosing the right tools is crucial for streamlining your email marketing workflow and maximizing efficiency. At Razobyte, we work with a range of email marketing platforms, including Mailchimp, Brevo (Send in blue),  HubSpot, and Lemlist, to provide you with the tools you need to create, send, and track your email campaigns. Whether you're a small business or a large enterprise, we'll help you select the email marketing platform that best suits your needs and budget.
    </p>
    <div className='flex items-center justify-center py-3'>
    <Button className='btn2'>Get in touch </Button>
    </div>


    </div>
    <div className='col-md-6 d-flex align-items-center justify-content-center'>
    <img src="Image/Email-1 (1).png" alt="" className='img-fluid'/>
    </div>
    </div>
    </Col>
    </Row>
        <Row className='flex justify-content-center align-items-center py-5 bg-[#59a0e333]'

        style={{backgroundImage:"url('Image/grey.png')",backgroundRepeat:"no-repeat",backgroundSize:"700px"}}

        
        >
        <Col md={10}>
        <h2 className='hed2 text-center'>TOP e-mail Marketing PROJECTS</h2>  
        <div className='d-flex justify-content-center align-items-center gap-[150px] py-5' >
        <div className='Semproj-shadow'>
        <img src="Image/Sem-top-pr-1.png" alt="" className='img-fluid w-50'/>
        <img src=" Image/Sem-top-pr-2.png" alt="" className='img-fluid w-50'/>
        </div>
        <div className='Semproj-shadow d-md-flex d-none' 

        
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
                <img src="/Image/Search-projects2.png" alt="" className='img-fluid w-50' />
                <p className='para pt-2 text-center cursor-pointer' onClick={() => navigate('/socialMedia')}> Social Media Strategy</p>
            </div>
        </Col>
        <Col md={5} className='d-flex justify-content-center align-items-center mb-3 '>
            <div className='custom2-shadow'>
                <img src="/Image/Sem-project.png" alt="" className='img-fluid w-50' />
                <p className='para pt-3 text-center'>Search Engine Optimization</p>
            </div>

        </Col>

    </Row>

<Blog title="Blogs"/>
<Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center align-items-center mt-5'>
                <Col md={12} className='flex items-center justify-center gap-5 py-3'>
                    <p className='para text-white'>Interested in a little more details, let us know how we can assist you Button</p>
                    <Button variant='dark' className='btn-last-banner-contact-Us'>Contact-us</Button>
                </Col>
            </Row>


        </>
    )
}