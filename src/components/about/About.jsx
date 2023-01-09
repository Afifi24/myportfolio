import React from 'react'
import './about.css'
// import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
// import {AiOutlineFolderOpen} from 'react-icons/ai'
import Trainer from '../../images/trainer1.jpg'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
          <div className="about__me">
                  <div className="about__me-image">
                       <img src={Trainer} alt="" />
                  </div>
          </div>
          <div className="about__content">
               <div className="about__cards">
                  <article className='about__card'>
                        <FiUsers className='about__icon'/>
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                  </article>
                  <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h5>Clients</h5>
                        <small>200+ Worldwide</small>
                  </article>
                  <article className='about__card'>
                        <AiOutlineFolderOpen className='about__icon'/>
                        <h5>Projects</h5>
                        <small>80+ Completed</small>
                  </article>
               </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, inventore. Pariatur cumque itaque dignissimos totam aliquid optio maxime alias, corrupti maiores fugiat veritatis, nihil quos sit nisi consectetur commodi exercitationem.</p>
                  <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About