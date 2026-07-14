import React from 'react'
import skillList from "../../../data/SkillData";
import SkillCard from "./SkillCard"
import { easeOut, motion } from "framer-motion";
const SkillGrid = () => {
    const containerVariants = {
        hidden:{},
        show:{
            transition:{
                staggerChildren:0.15
            },
        },
    } 

    const itemVariants = {
        hidden:{
            opacity:0,
            y:35
        },
        show:{
            opacity:1,
            y:0,
            transition:{
                duration:0.8,
                ease:"easeOut"
            }
        }
    }
  return (
    <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{once:true, amount:0.3}}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 ">
          {skillList.map((skill) => (
            <SkillCard
              key={skill.id}
              skills={skill}
              variants={itemVariants}
            />
          ))}
        </motion.div>
  )
}

export default SkillGrid
