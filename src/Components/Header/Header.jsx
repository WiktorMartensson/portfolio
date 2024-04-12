import React from "react";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";
import Lottie from 'react-lottie';


import animationData from '../../lotties/Animation.json'
import Lyftkran from "../../lotties/Lyftkran";

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
        <h5 className="text-light">Fullstack Developer</h5>
        </div>
        <CTA />

        <HeaderSocials />
        <div className="header__lottie">
        <div className="header__text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias fugiat explicabo obcaecati mollitia atque animi magnam porro, placeat reprehenderit unde, sit non expedita rerum corporis voluptatum asperiores autem ipsum maiores.'</p>
        </div>
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
