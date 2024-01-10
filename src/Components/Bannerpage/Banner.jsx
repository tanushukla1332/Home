import {Row,Col} from 'react-bootstrap'
import Particles from 'react-tsparticles';


export default function Banner(){
  const particlesInit = async (main) => {
    try {
      console.log('Initializing particles...');
      await loadFull(main);
      console.log('Particles initialized.');
    } catch (error) {
      console.error('Error initializing particles:', error);
    }
  };
  
  const loadFull = async (main) => {
    try {
      console.log('Loading full particles...');
      // Your particle loading logic
      console.log('Full particles loaded.');
    } catch (error) {
      console.error('Error loading full particles:', error);
    }
  };
  
   
    return(
       <Row>
      
       
     <Col md={12}>Hii shivani</Col>
     <Particles
     id="tsparticles"
     init={particlesInit}

     options={{
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
                 resize: true,
             },
             modes: {
                 push: {
                     quantity: 4,
                 },
                 repulse: {
                     distance: 200,
                     duration: 0.4,
                 },
             },
         },
         particles: {
             color: {
                 value: "#ffffff",
             },
             links: {
                 color: "#ffffff",
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
                 speed: 6,
                 straight: false,
             },
             number: {
                 density: {
                     enable: true,
                     area: 800,
                 },
                 value: 80,
             },
             opacity: {
                 value: 0.5,
             },
             shape: {
                 type: "circle",
             },
             size: {
                 value: { min: 1, max: 5 },
             },
         },
         detectRetina: true,
     }}
 />      
       </Row>
    )
}