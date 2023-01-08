import React from 'react'
import './testimonial.css'
import avatar1 from '../../images/avatar1.jpg'
import avatar2 from '../../images/avatar2.jpg'
import avatar3 from '../../images/avatar3.jpg'
import avatar4 from '../../images/avatar4.jpg'
import avatar5 from '../../images/avatar5.jpg'
import avatar6 from '../../images/avatar6.jpg'

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
     avatar:avatar1, 
     name:'Tina snow',
     review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus harum corrupti iure tempora, culpa excepturi! Eaque rem et omnis perspiciatis quisquam ipsa ab in! Tempore iure aliquam repudiandae non distinctio?' ,
         
  },
  {
     avatar:avatar2, 
     name:'Tina snow',
     review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus harum corrupti iure tempora, culpa excepturi! Eaque rem et omnis perspiciatis quisquam ipsa ab in! Tempore iure aliquam repudiandae non distinctio?' ,

  },
  {
     avatar:avatar3, 
     name:'Tina snow',
     review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus harum corrupti iure tempora, culpa excepturi! Eaque rem et omnis perspiciatis quisquam ipsa ab in! Tempore iure aliquam repudiandae non distinctio?' ,

  },
  {
     avatar:avatar4, 
     name:'Tina snow',
     review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus harum corrupti iure tempora, culpa excepturi! Eaque rem et omnis perspiciatis quisquam ipsa ab in! Tempore iure aliquam repudiandae non distinctio?' ,

  },
  {
     avatar:avatar5, 
     name:'Tina snow',
     review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus harum corrupti iure tempora, culpa excepturi! Eaque rem et omnis perspiciatis quisquam ipsa ab in! Tempore iure aliquam repudiandae non distinctio?' ,

  },
]
const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}>
      
      
     

       {data.map(({avatar,name,review},index)=>{
        return(
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className="client__review">{review}</small>
            
        </SwiperSlide>
        )
       })}
       
       
      </Swiper>
    </section>
  )
}

export default Testimonial