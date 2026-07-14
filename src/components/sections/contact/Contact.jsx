import React from 'react'
import ContactHeading from './ContactHeading'
import ContactContent from './ContactContent'

const Contact = () => {
  return (
    <section id='contact' className='bg-background py-24 px-4 mg:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto px-4'>
        <ContactHeading />
        <ContactContent />
      </div>
    </section>
  )
}

export default Contact
