
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DoS/DDoS Prediction ML Model",
      description: "Advanced machine learning model for detecting and predicting Denial of Service and Distributed Denial of Service attacks. Uses network traffic analysis and pattern recognition to identify malicious activities in real-time, helping strengthen cybersecurity defenses.",
      tech: ["Python", "Machine Learning", "Cybersecurity", "Network Analysis"],
      github: "https://github.com/VanshSa017/DDOS_Detection",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "CodeGenie",
      description: "An intelligent code generation and assistance platform that leverages AI to help developers write better code faster. Features include code completion, bug detection, and automated code optimization with support for multiple programming languages.",
      tech: ["AI/ML", "Code Generation", "Developer Tools", "Full Stack"],
      github: "https://github.com/exhuries/CodeGenie-Final/tree/main/Final%20Deliverables",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "JobPortal Website",
      description: "Comprehensive job portal platform connecting employers with job seekers. Features include job posting, application management, resume upload, advanced search filters, and real-time notifications. Built with modern web technologies for optimal user experience.",
      tech: ["Full Stack", "Web Development", "Database", "User Management"],
      github: "https://github.com/VanshSa017/JobPortal",
      gradient: "from-blue-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Real-world applications of machine learning and AI solving complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github size={20} className="text-gray-600 dark:text-gray-300" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.github.com/VanshSa017"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
