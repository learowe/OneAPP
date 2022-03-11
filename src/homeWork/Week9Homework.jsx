import React from 'react'
import _NavBarHW from './_NavBarHW';
import { motion } from "framer-motion"
import './Week9Homeworkstyle.css';


function Week9Homework() {
  return (
    <div className="app-container">
      <_NavBarHW />
      <div className="content">
        <h1>Week 9 Homework</h1>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button" onClick={() => null}>
          Launch modal
        </motion.button>
          <motion.div 
          className="animationBox"
          animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}> HELLO ANIMATION
        </motion.div>

      </div> 
    </div>
  );
}

export default Week9Homework