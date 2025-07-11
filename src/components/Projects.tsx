import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const reactProjects = [
    {
      title: 'Food Recipe',
      description: 'A recipe app to explore and save your favorite dishes.',
      url: 'https://azamat-js.github.io/Recipe-app',
      tech: ['React.js', 'Tailwind CSS', 'API Integration'],
      category: 'React & Tailwind',
      image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/classic_garlic_bread_84954_16x9.jpg',
    },
    {
      title: 'Expense Tracking App',
      description: 'Track your daily expenses and visualize spending trends.',
      url: 'https://azamat-js.github.io/Expense-tracking/',
      tech: ['React.js', 'Tailwind CSS'],
      category: 'React & Tailwind',
      image: 'https://www.valapoint.com/wp-content/uploads/2024/08/best-bill-reminder-app-1.webp',
    },
    {
      title: 'Shopping Cart Redux',
      description: 'Shopping cart built with React and Redux.',
      url: 'https://azamat-js.github.io/Shopping-cart/',
      tech: ['React.js', 'Redux', 'Tailwind CSS', 'API Integration'],
      category: 'React & Tailwind',
      image: 'https://imageio.forbes.com/specials-images/imageserve/6349c12e2476e78de0de06ab/Online-Shopping/960x0.png?format=png&width=960',
    },
    {
      title: 'Weather App',
      description: 'Get real-time weather updates for any city.',
      url: 'https://azamat-js.github.io/Weather-app/',
      tech: ['React.js', 'API Integration'],
      category: 'React & Tailwind',
      image: 'https://img.freepik.com/free-vector/watercolor-weather-effects-collection_23-2149115331.jpg?semt=ais_hybrid&w=740',
    }
  ];

  const htmlProjects = [
    {
      title: 'Coffee Shop',
      description: 'Landing page design for a modern coffee shop.',
      url: 'https://azamat-js.github.io/Coffee-shop/',
      tech: ['HTML', 'CSS'],
      category: 'HTML & CSS',
      image: 'https://i.pinimg.com/736x/37/4d/e7/374de76f84fff32b7ca2e424d4eeb72c.jpg',
    },
    {
      title: 'Barbers',
      description: 'A stylish homepage for a barber shop.',
      url: 'https://azamat-js.github.io/Barbers/',
      tech: ['HTML', 'CSS'],
      category: 'HTML & CSS',
      image: 'https://t4.ftcdn.net/jpg/03/78/83/15/360_F_378831540_10ShB9tnvs2quli24qe53ljhvsL07gjz.jpg',
    },
    {
      title: 'Art Pictures',
      description: 'Minimalist gallery website to showcase art pictures.',
      url: 'https://azamat-js.github.io/Art-pictures/',
      tech: ['HTML', 'CSS'],
      category: 'HTML & CSS',
      image: 'https://m.media-amazon.com/images/I/81tkSHzccIL.jpg',
    },
    {
      title: 'Chairs Shop',
      description: 'Product page for a designer chair store.',
      url: 'https://azamat-js.github.io/Chairs-shop/',
      tech: ['HTML', 'CSS'],
      category: 'HTML & CSS',
      image: 'https://interwood.pk/cdn/shop/files/WhatsApp_Image_2025-04-11_at_5.02.30_PM_1.jpg?v=1752151738',
    },
    {
      title: 'Hoodies Shop',
      description: 'E-commerce landing page for a hoodie brand.',
      url: 'https://azamat-js.github.io/Hoodies/',
      tech: ['HTML', 'CSS'],
      category: 'HTML & CSS',
      image: 'https://static.vecteezy.com/system/resources/previews/047/792/189/non_2x/black-and-white-hoodie-cartoon-illustration-with-pockets-vector.jpg',
    }
  ];

  const allProjects = [...reactProjects, ...htmlProjects];

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
      {/* Project Image Placeholder */}
<div className="h-48 relative overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
  />
</div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-slate-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies
          </p>
        </div>

        {/* React Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            React.js & Tailwind CSS Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {reactProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* HTML/CSS Projects */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            HTML & CSS Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {htmlProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index + reactProjects.length} />
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/azamat-js"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300 font-medium"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;