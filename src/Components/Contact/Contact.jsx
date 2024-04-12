import React, { useRef } from 'react'
import './Contact.css'

import emailjs from 'emailjs-com';

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sp0lb1g', 'template_xdr11ae', form.current, 
        '5OIi-sdkQzNQTvsUT'
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <EmailIcon className='contact__option-icon' />
            <h4>Email</h4>
            <h5>wiktor.martenssons@gmail.com</h5>
            <a href="mailto:wiktor.martenssons@gmail.com" target='_blank'>Send a message</a>
          </article>

          {/* <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>wiktor.martenssons@gmail.com</h5>
            <a href="https://m.me/wiktor.martensson" target='_blank'>Send a message</a>
          </article> */}

          <article className='contact__option'>
            <LinkedInIcon className='contact__option-icon'/>
            <h4>Message me</h4>
            <h5> on LinkedIn</h5>
            <a href="https://www.linkedin.com/in/wiktor-m%C3%A5rtensson-6a47202aa/" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
