import React from "react";
import "./Testimonials.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Avtr1 from "../../assets/avatar1.jpg";
import Avtr2 from "../../assets/avatar2.jpg";
import Avtr3 from "../../assets/avatar3.jpg";
import Avtr4 from "../../assets/avatar4.jpg";

import logo from "../../assets/techoverlogo.png";
import sanda from "../../assets/sanda.png";

const data = [
  {
    avatar: logo,
    name: "Techover Academy",
    years: "2023-2024",
    review:
      "Professionally trained by industry consultants to become a React developer.",
  },
  {
    avatar: sanda,
    name: "Sandagymnasiet",
    years: "2015-2018",
    review: "Ekonomiprogrammet med inrikting juridik. Webbutveckling",
  },
  {
    avatar: Avtr3,
    name: "Kwamme Despite",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt inventore cum fuga nemo? Soluta fugiat nemo cupiditate enim, voluptate odio dolorem provident perferendis laborum deserunt eum, cum optio tempora possimus.",
  },
  {
    avatar: Avtr4,
    name: "Nana Ama McBrown",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt inventore cum fuga nemo? Soluta fugiat nemo cupiditate enim, voluptate odio dolorem provident perferendis laborum deserunt eum, cum optio tempora possimus.",
  },
];

const Testimonials = () => {
  return (
    <section id="education">
      <h2>Education</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review, years }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h4 className="client__name">{name}</h4>
              <h5> {years} </h5>
              <small className="client__review"> {review} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
