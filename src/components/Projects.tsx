
import React from 'react';
import { Clock, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Home Automation using WhatsApp",
      year: "2023",
      description: "Developed and implemented a home automation system utilizing WhatsApp as the primary interface for control and monitoring. Integrated various smart devices such as lights, thermostats, and security cameras into the system for seamless remote management. Programmed custom scripts and routines to automate household tasks and enhance convenience and energy efficiency.",
      technologies: ["IoT", "Automation", "WhatsApp API"],
      icon: <Zap className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Electricity Cost Per Day Calculator",
      year: "2022",
      description: "Created a Daily Electricity Cost Calculator: Developed a tool to compute daily electricity expenses based on usage data, rate per kWh, and appliance details. Implemented Cost Analysis Features: Incorporated functionalities to analyze and visualize daily cost trends and savings opportunities.",
      technologies: ["Data Analysis", "Cost Tracking", "Visualization"],
      icon: <Clock className="w-10 h-10 text-blue-600" />,
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-50 p-4 flex items-center justify-between">
                <div className="bg-white rounded-full p-3 shadow-md">
                  {project.icon}
                </div>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{project.year}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
