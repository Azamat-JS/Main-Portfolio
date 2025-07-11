import React from 'react';
import { ChevronDown, Code, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <Code className="h-16 w-16 text-white" />
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 animate-fade-in">
            Azamat Abdullayev
          </h1>

          {/* Bio */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-stack developer, eager to learn, punctual, write clean code, patient, hard-working, 
            have communication, leadership, and honesty.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Full-Stack Developer
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Clean Code Advocate
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Team Leader
            </span>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            View My Projects
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;