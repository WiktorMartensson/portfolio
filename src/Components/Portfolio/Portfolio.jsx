import React from "react";
import "./Portfolio.css";
import Spotifyclone from '../../assets/Spotifyclone.png'
import Flagproject from '../../assets/Flagproject.png'
import todos from '../../assets/Todos.png'
import Darkmode from '../../assets/Darkmode.png'
import klarna from  '../../assets/klarna-checkout.png'
import pwgen from  '../../assets/project4.png'
import spclone from  '../../assets/project1-remove.png'



import spotifydemo from '../../assets/Spotifydemo.mp4'






const data = [
  {
    id: 1,
    image: spclone,
    title: 'Spotify Clone',
    github: 'https://github.com',
    livedemo: spotifydemo
  },
  {
    id: 1,
    image: Flagproject,
    title: 'Flagproject',
    github: 'https://github.com/WiktorMartensson/Flagproject',
    livedemo: 'https://stupendous-brigadeiros-790cb8.netlify.app'
  },
  {
    id: 1,
    image: todos,
    title: 'Todos',
    github: 'https://github.com',
    livedemo: 'https://vermillion-queijadas-eb753b.netlify.app'
  },
  {
    id: 1,
    image: Darkmode,
    title: 'Darkmode Project',
    github: 'https://github.com/WiktorMartensson/DarkMode',
    livedemo: 'https://dapper-mooncake-325cba.netlify.app'
  },
  {
    id: 1,
    image: klarna,
    title: 'Klarna Checkout',
    github: 'https://github.com',
    livedemo: 'https://google.com'
  },

  {
    id: 1,
    image: pwgen,
    title: 'Password Generator',
    github: 'https://github.com/WiktorMartensson/DarkMode',
    livedemo: 'https://wiktorpasswordgenerator.netlify.app/'
  }
]



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, livedemo }) =>{
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={livedemo} className="btn" target="_blank">
                Live Demo
              </a>
              </div>
            </article>
            )
          })
        }

      </div>
    </section>
  );
};

export default Portfolio;
