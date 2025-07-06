
import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Vansh Saxena
          </h1>
          <div className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-4 animate-fade-in">
            Data Science & Machine Learning
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Passionate about leveraging AI and machine learning to solve real-world problems and create innovative solutions
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-12 animate-fade-in">
          <a
            href="https://www.github.com/VanshSa017"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} className="text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-saxena-442b6a287/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} className="text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="mailto:vanshsaxena7781@gmail.com"
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} className="text-gray-700 dark:text-gray-300" />
          </a>
        </div>

        <div className="flex justify-center gap-4 animate-fade-in">
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400 dark:text-gray-500" />
      </div>
    </section>
  );
};

export default Hero;
