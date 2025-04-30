import { useEffect } from 'react'
import React from 'react';
import Header from './components/header/Header'
import AboutMe from './components/about-me/AboutMe'
import './App.scss'
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolio from './components/portfolio/Portfolio';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
        <Header />
        <Intro />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Education />
        <Contact />
    </>
  )
}

export default App
