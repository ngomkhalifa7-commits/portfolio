import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Rayhan from './components/Rayhan'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section:not(#accueil)')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    sections.forEach((section) => {
      section.classList.add('reveal')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
         <Rayhan />
        <Skills />
        <Contact />
       
      </main>
    </>
  )
}

export default App