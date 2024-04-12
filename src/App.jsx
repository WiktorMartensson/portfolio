import { useState } from 'react'


//Imports

import Header from './Components/Header/Header'
import Nav from './Components/Navbar/Nav'
import About from './Components/About/About'
import Experience from './Components/experience/Experience'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

import Background from './Components/Background/Background.jsx'



function App() {

  return (
    <>
      <Background />
      <div className="content">
        <Header />
        <Nav />
        <About />
        <Experience />
        {/* <Services /> */}
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App
