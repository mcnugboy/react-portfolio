import React from 'react'
import './about.css'
import ME from '../../assets/meatcap.jpg'
import {FaCode, FaGamepad} from 'react-icons/fa'
import {MdEngineering} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Learn</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <img src={ME} alt='' className='about_me-image'></img>
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
              <small>On-Site Experience</small>
            </article>

            <article className='about_card'>
              <FaGamepad className='about_icon' />
              <h5>Gaming</h5>
              <small>300+ Games Played</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis odio dolorem esse eos cumque aliquam, eaque nostrum nemo recusandae unde, alias, culpa accusamus. Itaque quod corporis voluptas commodi impedit tenetur incidunt, cumque inventore doloribus iusto. Delectus quae natus deserunt id neque ab voluptates incidunt eius quod adipisci, reiciendis quidem sunt aperiam illo nostrum vitae hic dolore quis, temporibus maiores consequuntur repellat, molestias amet repudiandae. Tempore harum tempora ipsum accusantium magnam!
          </p>

          {/* <a href="#contact" className='btn btn-primary'>Lets chat it up!</a> */}
        </div>
      </div>
    </section>
  )
}

export default About