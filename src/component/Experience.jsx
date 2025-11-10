import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience & Education</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
              Ed
            </div>
            <h3 className="text-2xl font-bold mb-2">Education</h3>
            <h4 className="text-xl text-blue-600 mb-2">University of Colombo</h4>
            <p className="text-gray-600 mb-2">Bachelor of ICT (BICT)</p>
            <p className="text-gray-500">Pursuing degree in Information and Communication Technology</p>
          </div>
          {/* Work Experience */}
          <div className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
              Ex
            </div>
            <h3 className="text-2xl font-bold mb-2">Experience</h3>
            <h4 className="text-xl text-blue-600 mb-2">People's Bank</h4>
            <p className="text-gray-600 mb-2">Savings Account Section</p>
            <p className="text-gray-500">6 months internship experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
