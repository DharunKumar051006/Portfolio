import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollTracking } from './hooks/useScrollTracking'

function App() {
  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'achievements', 'contact']
  const activeSection = useScrollTracking(sections)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-dark">
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default App
