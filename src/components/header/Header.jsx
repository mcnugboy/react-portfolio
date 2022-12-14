import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/picyoyoyo.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <div className="gskrt">
      <h5>Hello I'm</h5>
      <h1>Grant Huiras</h1>
      <h5 className="text-light">Fullstack Developer, Engineer, & Gamer</h5>
      </div>
      <CTA />
      <HeaderSocials />

      {/* <div className="me">
        <img src={ME} alt="" />
      </div> */}

      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header