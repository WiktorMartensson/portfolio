import React from "react";
import "./About.css";
import test from "../../assets/testimg.jpg";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";

import Lottie from "react-lottie";

import AnimationPerson from "../../lotties/person";


const About = () => {


  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          {/* {<div className="about__me-image">
            <img src={test} alt="About Image" />
          </div> } */}
          <AnimationPerson />
         
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <CodeIcon className="about__icon" />
              <h5>Frontend Development</h5>
            </article>

            <article className="about__card">
              <StorageIcon className="about__icon" />
              <h5>Backend Development</h5>
            </article>

            <article className="about__card">
              <ViewSidebarIcon className="about__icon" />
              <h5>UI/UX Design</h5>
            </article>
          </div>

          <p>
            As a junior full-stack developer, I bring a dynamic blend of
            enthusiasm and expertise to every project I tackle. Specializing in
            the MERN stack, my passion lies in crafting seamless user
            experiences from front to back. With a keen eye for detail and a
            drive for innovation, I thrive on the challenge of merging
            cutting-edge technology with intuitive UI/UX design. My journey in
            development is marked by an insatiable curiosity and a relentless
            pursuit of knowledge. Every line of code I write is infused with a
            genuine excitement to learn, grow, and push boundaries. Whether it's
            refining the frontend, optimizing backend processes, or honing UI/UX
            interfaces, I am dedicated to delivering solutions that not only
            meet but exceed expectations. Let's build something remarkable
            together.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
