import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo' >WM</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Technologies</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/wiktor-m%C3%A5rtensson-6a47202aa/"> <LinkedInIcon /> </a>
        <a href="https://github.com/WiktorMartensson"> <GitHubIcon /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Wiktor Mårtensson. 2024</small>
      </div>
    </footer>
  )
}

export default Footer



