import React from 'react';
import { Layout, Server, Database, Code } from 'lucide-react';

const skillsData = [
  { category: 'Frontend', icon: <Layout className="w-6 h-6" />, items: ['React', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'] },
  { category: 'Backend', icon: <Server className="w-6 h-6" />, items: ['Node.js', 'Express', 'REST APIs'] },
  { category: 'Database', icon: <Database className="w-6 h-6" />, items: ['MongoDB', 'Firebase', 'MySQL'] },
  { category: 'Tools', icon: <Code className="w-6 h-6" />, items: ['Git/GitHub', 'VS Code', 'Postman'] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills & Technologies</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg text-white">{skill.icon}</div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <div className="space-y-2">
                {skill.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
