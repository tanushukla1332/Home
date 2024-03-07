
import React,{ useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine } from "@tsparticles/react";
import {Row,Col,Button} from 'react-bootstrap'
import { loadSlim } from "@tsparticles/slim"; 
import Data from '../../../Data.json';

export default function App (){
  const [init, setInit] = useState(false);
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
   
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //         setCurrentDataIndex(prevIndex => (prevIndex + 1) % Data.length);
  //     }, 3000);
  //     return () => clearInterval(interval);
  // }, [Data]);
  
  useEffect(() => {


    window.scrollTo(0, 0);
    initParticlesEngine(async (engine) => {

      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {

  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1000,
      },    
      background: {
        color: {
          value: "#3B7FBF",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 20,
          },
          repulse: {
            distance: 200,
            duration: 0.5,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#3b7fbf",
          distance:150,
          enable: true,
          opacity: 0.9,
          width: 2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value:50,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "image", // Changing shape type to image
          stroke: {
            width:20,
            color:"#3b7fbf",
          },
          options: {
            image: {
              src: "Image/Ellipse 2hjgf (1).png", // Add your image path here
              width:100, // Adjust width of the image particle
              height:100, // Adjust height of the image particle
            },
          },
        },
        size: {
          value: {min:25, max:25},
        },
      },
      detectRetina: true,
    }),
    [],
  );
  
  if (init) {
    return (
      <>
      <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
      
      <Row className='justify-content-center align-items-center px-0' >      
            <Col md= {5} className='text-light'>
                <h1 className='hed1  pt-2'>{Data[currentDataIndex].title}</h1>
                <h3 className='hed3 text-white'>{Data[currentDataIndex].subTitle}
                </h3>
                <p className='bannerpara'>{Data[currentDataIndex].paragraph}</p>
                <div className="d-flex jjustify-content-center align-itmes-center gap-3">
                <Button className=" btm" variant='dark'>Get in touch </Button>
                <Button variant='dark' className=" btm ">About Us</Button>
                </div>
            </Col>
            
            
            <Col md={6} className='d-flex justify-content-center align-items-center  pt-2 '>
                <img src={Data[currentDataIndex].image} alt='' fluid
                    className='rounded-1 banner-images-firstsection img-fluid  ' style={{height:"60vh"}}
                />
            </Col>
           
        </Row>  
      </>
    
      
    );
  }
};

