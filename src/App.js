
import { motion } from 'framer-motion';
import './App.css';
import images from './images';
//import {useRef, useState, useEffect } from 'react';

function App() {
  console.log(images);
  return (
    <div className="App">
     <motion.div className="carousel" >
       <motion.div className="inner-carousel" drag='x' >
         {images.map(image =>{
           return(
             <motion.div className='item' >
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
