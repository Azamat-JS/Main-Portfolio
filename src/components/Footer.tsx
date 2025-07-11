import React from 'react';
import { Github, Linkedin, Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="flex items-center justify-center mb-6">
            <Code className="h-8 w-8 mr-2 text-blue-400" />
            <h3 className="text-2xl font-bold">Azamat Abdullayev</h3>
          </div>

          {/* Bio */}
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Full-stack developer passionate about creating clean, efficient, and user-friendly web applications.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Azamat-JS"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors duration-300 group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/azamat-abdullaev-129a0034a"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors duration-300 group cursor-not-allowed opacity-50"
              title="LinkedIn - Coming Soon"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-8 mb-8 text-slate-300">
            <a href="#hero" className="hover:text-white transition-colors duration-300">Home</a>
            <a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-slate-800">
            <p className="text-slate-400 flex items-center justify-center">
              © 2025 Azamat Abdullayev. Made with 
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" /> 
              and React.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;