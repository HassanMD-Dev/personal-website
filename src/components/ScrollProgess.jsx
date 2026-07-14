import React from 'react'
import { motion, useScroll } from "framer-motion";
const ScrollProgess = () => {
    const {scrollYProgress} = useScroll()
  return (
    <motion.div style={{scaleX: scrollYProgress}} className='fixed top-0 left-0 w-full h-1 shadow-lg shadow-primary/50 origin-left z-50 bg-primary' />
  )
}

export default ScrollProgess
