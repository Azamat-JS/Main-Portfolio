import React from 'react';
import { Code, Database, Cloud, Settings, GitBranch, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: <Code className="h-8 w-8" />,
      skills: ['JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'Nest.js', 'React.js', 'HTML & CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Databases',
      icon: <Database className="h-8 w-8" />,
      skills: ['MongoDB', 'PostgreSQL'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Cloud & Microservices',
      icon: <Cloud className="h-8 w-8" />,
      skills: ['AWS EC2', 'S3', 'RDS', 'IAM', 'Supabase', 'Microservices', 'RabbitMQ', 'Kafka', 'gRPC', 'NATS'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'DevOps',
      icon: <Settings className="h-8 w-8" />,
      skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'pm2', 'nginx', 'Linux'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'ORM & APIs',
      icon: <Zap className="h-8 w-8" />,
      skills: ['Prisma', 'TypeORM', 'RESTful', 'GraphQL'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Version Control',
      icon: <GitBranch className="h-8 w-8" />,
      skills: ['Git', 'GitHub'],
      color: 'from-slate-500 to-gray-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-slate-200 transform hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 ml-4">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;