import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-blue-600 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-600' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => { scrollToSection(item.toLowerCase()); setMobileMenuOpen(false); }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
