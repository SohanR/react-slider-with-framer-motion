
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import images from './images';

function App() {

  const [width, setWidth] = useState(0)
  const carousel = useRef()


  useEffect(() =>{
    console.log(carousel.current.scrollWidth , carousel.current.offsetWidth );
    setWidth( carousel.current.scrollWidth - carousel.current.offsetWidth )
  },[])



  return (
    <div className="App">
     <motion.div className="carousel" ref={carousel} whileTap={{cursor: "grabbing"}}  >
       <motion.div className="inner-carousel" drag='x' dragConstraints={{right: 0, left: -width}} >
         {images.map(image =>{
           return(
             <motion.div className='item' key={image} >
               <img src={image} alt="" />
             </motion.div>
           )
         })}
       </motion.div>
     </motion.div>
    </div>
  );
}

export default App;
