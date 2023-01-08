import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import emailjs from 'emailjs-com'
import  { useRef } from 'react';
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_935t41g', 'template_xju9g5v', form.current, 'o5IlRGfbPD5CEy8v2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
     <h5>Get In Touch </h5>
     <h2>Contact Me</h2>
     <div className="container contact__container">
      <div className="contact-options">
        <article className="contact-option">
          <MdOutlineEmail className='contact-option-icon'/>
          <h4>Email</h4>
          <h5>afifi71brahim@gmail.com</h5>
          <a href="mailto:afifi71brahim@gmail.com">Send a message</a>
        </article>
        <article className="contact-option">
          <RiMessengerLine className='contact-option-icon'/>
          <h4>Messenger</h4>
          <h5>afifi brahim</h5>
          <a href="https://m.me/ibrahim.afifi.75457/" target='_blank'>Send a message</a>
        </article>
        <article className="contact-option">
          <AiOutlineWhatsApp className='contact-option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+123456789</h5>
          <a href="https://api.whatsapp.com/send?phone+212614350974" target='_blank'>Send a message</a>
        </article>
      </div>
      {/* end of the contact options */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name'  placeholder='Your Full Name' required/>
        <input type="email" name="email" placeholder='Your Email' required/>
        <textarea name="message" placeholder='Your Message' required rows="7"></textarea>
        <button type='submit' className='btn btn-primary'>Send</button>
      </form>
     </div>

    </section>
  )
}

export default Contact