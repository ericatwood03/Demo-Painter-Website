import React from 'react'
import { useRef } from 'react';
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Gallery from './Gallery'
import Reviews from './Reviews'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  const sections = {
    sec1: useRef(null),
    sec2: useRef(null),
    sec3: useRef(null),
    sec4: useRef(null),
    sec5: useRef(null),
    sec6: useRef(null),
  }
  //s

  const scrollToSection = (section) => {
    const elementRef = sections[section]
    if(section == "sec1"){
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Navbar linkFunction={scrollToSection}/>
      <Hero reference={sections.sec1} />
      <Services reference={sections.sec2} />
      <About reference={sections.sec3} />
      <Gallery reference={sections.sec4} />
      <Reviews reference={sections.sec5} />
      <Contact reference={sections.sec6} />
      <Footer />
    </div>
  )
}

export default App