import React from 'react'
import Resume from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download>Download Resume</a>
        <a href="#contact">Message Me</a>
    </div>
  )
}

export default CTA