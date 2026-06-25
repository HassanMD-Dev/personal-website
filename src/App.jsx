import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillCard from './components/SkillCard'

const App = () => {
  return (
    <div className='bg-slate-950 min-h-screen scroll-smooth'>
      <Navbar />
      <Hero />
      <SkillCard />
    </div>
  )
}

export default App