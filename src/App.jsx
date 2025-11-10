import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/NavBar'
import Hero from './component/Hero'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Experience from './component/Experience'
import Contact from './component/Contacts'
import Footer from './component/Footer'


function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home','skills','projects','experience','contact'];
      const current = sections.find(sec => {
        const el = document.getElementById(sec);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 transition-colors duration-300">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection}/>
      <Hero scrollToSection={scrollToSection}/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
