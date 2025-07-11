import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-800">
            Azamat Abdullayev
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-300 py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-300 py-2"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-300 py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-300 py-2"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;