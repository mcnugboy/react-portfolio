import React from 'react'
import './nav.css'
import {MdOutlineConnectWithoutContact} from 'react-icons/md'
import {SiStarship} from 'react-icons/si'
import {AiFillExperiment} from 'react-icons/ai'
import {FaUserAstronaut} from 'react-icons/fa'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><SiStarship/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiFillExperiment/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineConnectWithoutContact/></a>
    </nav>
  )
}

export default Nav