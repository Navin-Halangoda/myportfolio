import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Navin Halangoda</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            ICT undergraduate at University of Colombo, passionate about web and software development.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
            >
              Contact Me
            </button>
          </div>
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/Navin-Halangoda" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-200 rounded-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/navin-halangoda-595301248" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-200 rounded-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:naveenshanaka186@gmail.com" className="p-3 bg-gray-200 rounded-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
 <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
  {/* Glowing background */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-40 blur-3xl animate-pulse"></div>
  
  {/* Profile container */}
  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center shadow-xl overflow-hidden">
    
   
    <img
      src="profile.jpg"
      alt="NS"
      className="w-full h-full object-cover rounded-full transform transition-transform duration-500 hover:scale-105 object-top-[30%]"
      style={{ objectPosition: 'center 20%' }} 
    />

    
    <div className="absolute inset-0 bg-black/20 rounded-full mix-blend-overlay"></div>
  </div>
</div>

</div>

        </div>
      </div>
    </section>
  );
}
