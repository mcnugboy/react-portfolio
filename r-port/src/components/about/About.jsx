import React from 'react'
import './about.css'
// import ME from ''
import {FaCode, FaGamepad} from 'react-icons/fa'
import {MdEngineering} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Learn</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            {/* <img src={ME} alt='' /> */}
          </div>
        </div>

        <div className="about_container">
          <div className="about_cards">
            <article className='about_card'>
              <FaCode className='about_icon' />
              <h5>Development</h5>
              <small>2+ Years Knowledge</small>
            </article>

            <article className='about_card'>
              <MdEngineering className='about_icon' />
              <h5>Engineering</h5>
              <small>4+ Years On-Site Experience</small>
            </article>

            <article className='about_card'>
              <FaGamepad className='about_icon' />
              <h5>Gaming</h5>
              <small>300+ Games Played-Thru</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eaque magni. Dolores accusamus, nulla itaque perspiciatis maxime repudiandae facilis corrupti natus minus tempore voluptatibus reprehenderit ab consequatur velit tenetur ipsum.
          </p>

          <a href="#contact" className='btn btn-primary'>Lets chat it up!</a>
        </div>
      </div>
    </section>
  )
}

export default About