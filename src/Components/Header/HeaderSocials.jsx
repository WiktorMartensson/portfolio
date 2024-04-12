import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/wiktor-m%C3%A5rtensson-6a47202aa/" target="_blank" > <LinkedInIcon/> </a>
      <a href="https://github.com/WiktorMartensson" target="_blank"> <GitHubIcon/> </a>
    </div>
  )
}

export default HeaderSocials
