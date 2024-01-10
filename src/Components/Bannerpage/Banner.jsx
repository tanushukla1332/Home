import React,{ useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {Row,Col,Button,Image} from 'react-bootstrap'

import { loadSlim } from "@tsparticles/slim"; 
import Data from '../../Data.json';
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
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.8,
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
          speed: 5,
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
          type: "",
        },
        size: {
          value: { min: 5, max: 10 },
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
      <Row className='py-3'>      
            <Col className='text-light'>
                <h1 className='hed1  mt-5 '>{titles[currentTitle]} </h1>
                <h3 className=' hed3 '>{subtitles[subheading]}
                </h3>
                <p className=' sm '>{paragraphs[paras]}</p>
                <Button className=" btm mr-5" variant='dark'>Get in touch </Button>
                <Button variant='dark' className=" btm mr-5 my-3">About Us</Button>
            </Col>
            <Col md={7} className='pt-2'>
                <Image src={allimages[Allimagess]} alt='' fluid
                    className='rounded-1' style={{ width: "100%", height: "500px" }}
                />
            </Col>
        </Row>  
      </>
    
      
    );
  }
};