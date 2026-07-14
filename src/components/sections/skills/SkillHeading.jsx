import React from 'react'
import { motion } from 'framer-motion'
const SkillHeading = () => {
  return (
    <motion.div 
    initial={{opacity:0, y:30}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true, amount:0.3}}
    transition={{duration:0.8, ease:"fadeUp"}}
    className='space-y-3 text-center'>
      <p className='text-sm uppercase font-medium tracking-widest text-primary'>SKILLS</p>
      <h2 className='max-w-4xl mx-auto text-3xl md:text-4xl lg:text-5xl mt-4 font-bold tracking-tight leading-tight text-foreground'>Technologies I use to build modern, fast, and responsive web applications.</h2>
    </motion.div>
  )
}

export default SkillHeading
