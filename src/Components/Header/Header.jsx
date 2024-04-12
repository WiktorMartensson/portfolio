import React from "react";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";
import Lottie from 'react-lottie';


import animationData from '../../lotties/Animation.json'
import Lyftkran from "../../lotties/Lyftkran";
import Typewriter from "./Typewriter";

import CTA from "./CTA";

const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <header>
      <div className="container header__container">
       
        <div className="header__titles">
        <h1>Wiktor Mårtensson</h1>
        <Typewriter texts={['Frontend Developer', 'Backend Developer', 'UI/UX Design']} />
        </div>
        <CTA />
        <HeaderSocials />
        <div className="header__lottie">
          <p>Welcome to my portfolio! As a junior full-stack developer proficient in the MERN stack, I showcase my passion and proficiency through projects highlighting my skills in web development.</p>
          <Lottie options={defaultOptions} height={400} width={400}/>

        </div>

        {/* <div className="hero-img">
          <div className="moving-border">
            <lottieAnimation />
            <img src={wiktor} alt="" />
            <div className="border-animation"></div>
          </div>
        </div> */}

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
