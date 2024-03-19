import {Row,Col,Button} from 'react-bootstrap'
import Blog from '../../Blog/Blog2';
import { useNavigate } from 'react-router';

export default function SocialMediaMarketing({title}){
    const navigate=useNavigate()
    return(
        <>
        <Row className='flex items-center justify-center'
     >
        <Col md className='px-0'>
        <img src="Image/Social-Media-banner.png" alt=""  className='img-fluid'/>
        <div className='flex items-center justify-center absolute top-10 left-5'>
        <h1 className='hed1 text-white'>Social Media Marketing</h1>
        </div>
        </Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center py-5'

        style={{backgroundImage:"url('Image/blue.png')",backgroundRepeat:"no-repeat",backgroundSize:"600px",backgroundPosition:"right"}}

        >
        <Col md={10}>
        <div className='d-md-flex align-items-center justify-content-center gap-5'>
        <div>
        <h2 className='hed2 text-center'>Facebook Ads</h2>
        <p className='para text-justify'>
        With over 2.8 billion monthly active users, Facebook remains one of the most powerful advertising platforms available today. Our Facebook Ads experts can help you reach your target audience with precision targeting options, engaging ad formats, and robust analytics. Whether you're looking to increase brand awareness, drive website traffic, or generate leads, we'll help you create compelling Facebook ad campaigns that deliver results.
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
        <div className='d-md-flex align-items-center justify-content-center gap-5'>

        <div className='col-md-6 d-md-flex  d-none align-items-center justify-content-center'>
        <img src="Image/so-med-1 (5).png" alt="" className='img-fluid'/>
        </div>
        <div>
        <h2 className='hed2 text-center'>Instagram Ads</h2>
        <p className='para text-justify'>As one of the fastest-growing social media platforms, Instagram offers unparalleled opportunities for businesses to showcase their products and connect with their audience. Our Instagram Ads services leverage the platform's visual-centric nature to create eye-catching ad campaigns that drive engagement and conversions. From photo ads and video ads to carousel ads and Stories ads, we'll help you leverage Instagram's diverse ad formats to achieve your marketing goals.</p>
        <div className='flex items-center justify-center py-3'>
    <Button className='btn2'>Get in touch </Button>
    </div>


        </div>
        <div className='col-md-6 d-flex  d-sm-none align-items-center justify-content-center'>
        <img src="Image/so-med-1 (5).png" alt="" className='img-fluid'/>
        </div>
      
        </div>
        </Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center py-5'>
        <Col md={10}>
        <div className='d-md-flex align-items-center justify-content-center gap-5'>
        <div>
        <h2 className='hed2 text-center'>LinkedIn Ads</h2>
        <p className='para text-justify'>LinkedIn is the prime platform for B2B marketing, providing access to a highly engaged audience of professionals and decision-makers. Our LinkedIn Ads experts can help you target your ads based on job title, industry, company size, and more, allowing you to reach the right audience with the right message. Whether you're looking to generate leads, promote thought leadership content, or recruit top talent, we'll help you leverage LinkedIn's powerful advertising platform to achieve your objectives.</p>
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
        <div className='d-md-flex justify-content-center align-items-center gap-5'>
        <div className=' col-md-6 d-md-flex d-none  justify-content-center align-items-center ' >
        <img src="Image/so-med-1 (3).png" alt="" className='img-fluid'/>
        </div>
        <div className=' d-flex flex-col justify-content-center'>
        <h2 className='hed2 text-white text-center'>Twitter Ads</h2>
        <p className='para text-justify text-white'>Twitter is one of the most dynamic platforms to ever exist. It allows businesses to engage with their audience in real-time conversations. Our Twitter Ads services help you amplify your brand's message, drive website traffic, and increase brand awareness through targeted advertising campaigns. Whether you're promoting a new product launch, driving attendance to an event, or boosting your social media presence, we'll help you create impactful Twitter ad campaigns that resonate with your audience.</p>
        <div className='flex items-center justify-center py-3'>
         <Button className='btn-whitebg'>Get in touch </Button>
    </div>

        </div>
        <div className='col-md-6 d-flex d-sm-none  justify-content-center align-items-center ' >
        <img src="Image/so-med-1 (3).png" alt="" className='img-fluid'/>
        </div>
   

        
        </div>
        <div className='d-md-flex justify-content-center align-items-center gap-5 py-5'>
        
        <div className='d-flex  flex-col justify-content-center'>
        <h2 className='hed2 text-white text-center'>Snapchat Ads</h2>
        <p className='para text-justify text-white'>Snapchat is the most popular platform among younger demographics, making it an ideal channel for brands looking to reach Gen Z and Millennials. We help our clients by creating ad campaigns that leverage the platform's unique features, such as AR lenses, filters, and Story ads. Whether you're looking to launch a new product, drive app installs, or promote an event, we'll help you create memorable Snapchat ad campaigns that capture the attention of your target audience.</p>
        <div className='flex items-center justify-center py-3'>
        <Button className='btn-whitebg'>Get in touch </Button>
   </div>
        

        </div>
        <div className=' col-md-6 flex justify-content-center align-items-center ' >
        <img src="Image/so-med-1 (3).png" alt="" className='img-fluid'/>
        </div>
   

        
        </div>
          <div className=' d-md-flex justify-content-center align-items-center gap-5'>
        <div className=' col-md-6 d-md-flex d-none justify-content-center align-items-center ' >
        <img src="Image/Telegram.png" alt="" className='img-fluid'/>
        </div>
        <div className='flex  flex-col justify-content-center'>
        <h2 className='hed2 text-white text-center'>Telegram Ads</h2>
        <p className='para text-justify text-white'>Telegram is a messaging platform known for its privacy and security features, making it a popular choice for users seeking a secure communication channel. Our experts are dedicated to help you reach a highly engaged audience of Telegram users with targeted advertising campaigns. Whether you're looking to promote your brand, drive traffic to your website, or increase app installs, we'll help you leverage Telegram's advertising platform to achieve your marketing objectives.</p>
        <div className='flex items-center justify-center py-3 '>
        <Button className='btn-whitebg'>Get in touch </Button>
   </div>

        </div>
        <div className=' col-md-6 d-flex d-sm-none justify-content-center align-items-center ' >
        <img src="Image/so-med-1 (3).png" alt="" className='img-fluid'/>
        </div>
   

        
        </div>
        </Col>
        
        </Row>
      
   

        
        <Row className='flex justify-content-center align-items-center py-5'

        style={{backgroundImage:"url('Image/grey.png')",backgroundRepeat:"no-repeat",backgroundSize:"700px"}}

        
        >
        <Col md={10}>
        <h2 className='hed2 text-center'>Top Soical Media Projects</h2>  
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
        <Row className='d-flex justify-content-center align-items-center py-5  bg-[#59a0e333]'>
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
    <Blog title="Blogs"/>
    <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center align-items-center'>
    <Col md={12} className='flex items-center justify-center gap-5 py-3'>
        <p className='para text-white'>Interested in a little more details, let us know how we can assist you Button</p>
        <Button variant='dark' className='btn-last-banner-contact-Us'>Contact-us</Button>
    </Col>
</Row>
        </>
    )
}