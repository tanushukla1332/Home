import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import {Row,Col} from 'react-bootstrap'
// Import Swiper styles
import 'swiper/swiper-bundle.css';


// Install Swiper modules

export default function Section2() {
  return (
    <>
      <Row className='bgphp2 py-5'>
      <h2 className='hed2 text-white text-center'>Why PHP Reigns Supreme in Web Development</h2>
      <p className='para text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <Col md={10}>
          <Swiper
          slidesPerView={3}
          modules={[Navigation, Pagination]}
       
          navigation
          pagination={{clickable: true }}

    
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
            <div className='php-section-services'>
            <img src="Image/php-4 (4).png" alt="" className='img-fluid w-20' />
            <h3 className='hed3 text-[#3b7fbf]'>Versatility and Flexibility</h3>
            <p className='para'>
            PHP empowers developers to create a wide range of web applications, from simple websites to complex enterprise solutions, thanks to its extensive library of functions and frameworks.
            </p>
            </div>
            </SwiperSlide>
            <SwiperSlide> 
            <div className='php-section-services'>
            <img src="Image/php-4 (3).png" alt="" className='img-fluid w-20' />
            <h3 className='hed3 text-[#3b7fbf]'>Cost-Effectiveness</h3>
            <p className='para'>
            Being open-source, PHP eliminates the need for expensive licensing fees, making it a cost-effective option for businesses of all sizes.s 
            </p>
            </div></SwiperSlide>
            <SwiperSlide> 
              <div className='php-section-services'>
            <img src="Image/php-4 (2).png" alt="" className='img-fluid w-20' />
            <h3 className='hed3 text-[#3b7fbf]'>Rapid Development</h3>
            <p className='para'>
            PHP's intuitive syntax and vast ecosystem of tools and frameworks enable rapid prototyping and development, reducing time-to-market for your projects .
            </p>
            </div>
            </SwiperSlide>
            <SwiperSlide> 
              <div className='php-section-services'>
            <img src="Image/php-4 (1).png" alt="" className='img-fluid w-20' />
            <h3 className='hed3 text-[#3b7fbf]'>Scalability and Performance</h3>
            <p className='para'>
            With its lightweight footprint and efficient execution, PHP offers seamless scalability and superior performance, ensuring your website can handle increased traffic and workload.
            </p>
            </div>
            </SwiperSlide>
            <SwiperSlide> 
            <div className='php-section-services'>
          <img src="Image/php-4 (5).png" alt="" className='img-fluid w-20' />
          <h3 className='hed3 text-[#3b7fbf]'>Strong Community Support</h3>
          <p className='para'>
          PHP boasts a vibrant community of developers who actively contribute to its growth and evolution, providing valuable resources, support, and updates.
          </p>
          </div>
          </SwiperSlide>
          
        
          </Swiper>
        </Col>
      </Row>
    </>
  );
}
