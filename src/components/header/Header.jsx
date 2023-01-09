import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../images/me.jpg'
// import Nki from '../../images/nki.png'
import Done from '../../images/done.png'

import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
       <div className="container header__container">
         <h5>Hello I'm</h5>
         <h1>Afifi Brahim</h1>
         <h5>Frontend Developer</h5>
         <CTA/>  
         <HeaderSocials/>
         <div className="me">
          <img src={Done} alt="me" />
         </div>
         <a href="#contact" className='scroll__down'>Scroll Down</a>
       </div>
    </header>
  )
}

export default Header
