import React,{ useEffect, useMemo, useState } from "react";
import Particles, {initParticlesEngine } from "@tsparticles/react";
import {Row,Col,Button,Image} from 'react-bootstrap'
import { loadSlim } from "@tsparticles/slim"; 
import Data from '../../../Data.json';

export default function App (){
  const [init, setInit] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0)
    const [subheading, setSubheading] = useState(0)
    const [paras, setParas] = useState(0)
    const [Allimagess, setAllImage] = useState(0)
    
    const titles = Data.map((data) => data.title)
 
    const subtitles = Data.map((data) => data.subTitle)
    const paragraphs = Data.map((data) => data.paragraph)
    const allimages = Data.map((data) => data.image)

    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length)
            setSubheading((prev) => (prev + 1) % subtitles.length)
            setParas((prev) => (prev + 1) % paragraphs.length)
            setAllImage((prev) => (prev + 1) % allimages.length)
        }, 3000)
        return () => clearInterval(intervalId)
    }, [titles.length,subtitles.length,paragraphs.length,allimages.length])

  useEffect(() => {
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
            quantity: 10,
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
          color: "#fff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
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
          value: 200,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "image",
        image:{
          src:"https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705708800&semt=sph",
          width:100,
          height:100
        }  
        
        },
        size: {
          value: { min:10, max: 20 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <>
      <div>
      <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
      </div>
      <Row className='py-2 justify-content-center align-items-center px-0'>      
            <Col md= {5} className='text-light '>
                <h1 className='hed1  pt-2'>{titles[currentTitle]} </h1>
                <h3 className='hed3 text-white'>{subtitles[subheading]}
                </h3>
                <p className='bannerpara'>{paragraphs[paras]}</p>
                <div className="d-flex jjustify-content-center align-itmes-center gap-3">
                <Button className=" btm" variant='dark'>Get in touch </Button>
                <Button variant='dark' className=" btm ">About Us</Button>
                </div>
            </Col>
            
            
            <Col md={6} className='d-flex justify-content-center align-items-center  pt-2 '>
                <Image src={allimages[Allimagess]} alt='' fluid
                    className='rounded-1 banner-images-firstsection' style={{height:"60vh"}}
                />
            </Col>
           
        </Row>  
      </>
    
      
    );
  }
};