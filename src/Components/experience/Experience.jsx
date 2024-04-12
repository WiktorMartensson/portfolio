import React from "react";
import "./Experience.css";

import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiJavascriptFill } from "react-icons/ri";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";

import Lyftkran from "../../lotties/Lyftkran";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>Technologies.</h2>
      <div className="lyftkran"><Lyftkran /></div>
      
      


      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="experience__details">
              <RiJavascriptFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>


            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="experience__details">
              <GrMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Entry level</small>
              </div>
            </article>

            <article className="experience__details">
              <RiJavascriptFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
