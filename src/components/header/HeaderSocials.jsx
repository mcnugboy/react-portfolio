import React from 'react'
import {BsLinkedin, BsGithub, BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/grant-huiras-41924016a" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/mcnugboy" target="_blank"><BsGithub/></a>
        <a href="https://youtube.com/grant20909" target="_blank"><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocials