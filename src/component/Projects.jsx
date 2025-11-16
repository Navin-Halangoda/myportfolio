import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
//update
const projects = [
  {
    name: 'Library Management System',
    description: 'A full-stack web application designed to efficiently manage and streamline library operations.',
    tech: ['React', 'Node.js (Express)', 'Mysql', 'Bootstrap'],
    github: 'https://github.com/Navin-Halangoda/mini-project.git',
    demo: '#',
    image: 'library.jpg' 
  },
  {
    name: 'Fot Announcer App',
    description: 'A mobile application for sharing faculty news and announcements',
    tech: ['Figma','Anroid Studio','Firebase','Java','XML'],
    github: 'https://github.com/Navin-Halangoda/FOT-Announcer.git',
    demo: '#',
    image: 'fot.png'
  },
  {
    name: 'Portfolio',
    description: '',
    tech: ['React','Tailwind Css',],
    github: 'https://github.com/Navin-Halangoda/my-portfolio.git',
    demo: '#',
    image: 'protfolio.png'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <Github className="w-5 h-5" /> GitHub
                  </a>
                  {/* <a
                    href={project.demo}
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
