import React from 'react'
import './portfolio.css'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
const data =[
{
  id:1,
  image:img1,
  title:'crypto currency Dashboard and financial visualization',
  github:'https://github.com',
  demo:'https://dribbble.com'

},
{
  id:2,
  image:img2,
  title:'crypto currency Dashboard and financial visualization',
  github:'https://github.com',
  demo:'https://dribbble.com'

},
{
  id:3,
  image:img3,
  title:'crypto currency Dashboard and financial visualization',
  github:'https://github.com',
  demo:'https://dribbble.com'

},
{
  id:4,
  image:img4,
  title:'crypto currency Dashboard and financial visualization',
  github:'https://github.com',
  demo:'https://dribbble.com'

},
{
  id:5,
  image:img5,
  title:'crypto currency Dashboard and financial visualization',
  github:'https://github.com',
  demo:'https://dribbble.com'

},
{
  id:6,
  image:img6,
  title:'crypto currency Dashboard and financial visualization',
  github:'https://github.com',
  demo:'https://dribbble.com'

},
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
       <div className="container portfolio__container">
       {data.map(({id,title,github,image,demo})=>{
        return(
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image"><img src={image} alt="" /></div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        )
       })}
       </div>
    </section>
  )
}

export default Portfolio
