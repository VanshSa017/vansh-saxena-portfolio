
import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
            Vansh Saxena
          </h1>
          <div className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-4 animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
            Data Science & Machine Learning
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
            Passionate about leveraging AI and machine learning to solve real-world problems and create innovative solutions
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-12 animate-fade-in opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
          <a
            href="https://www.github.com/VanshSa017"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Github size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-saxena-442b6a287/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Linkedin size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a
            href="mailto:vanshsaxena7781@gmail.com"
            className="group p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Mail size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
          </a>
        </div>

        <div className="flex justify-center gap-4 animate-fade-in opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]">
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform hover:-translate-y-1"
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
