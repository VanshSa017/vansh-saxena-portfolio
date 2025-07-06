
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="text-center z-10 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 animate-scale-in">
            Vansh Saxena
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium mb-6 animate-fade-in">
            Data Science & AI Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Transforming data into insights and building intelligent systems that solve real-world problems through machine learning and artificial intelligence.
          </p>
        </div>

        {/* Contact buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8 animate-fade-in">
          <a
            href="mailto:vanshsaxena7781@gmail.com"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Mail size={20} />
            <span>Get in Touch</span>
          </a>
          <a
            href="tel:8299641529"
            className="flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Phone size={20} />
            <span>Call Me</span>
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-6 justify-center animate-fade-in">
          <a
            href="https://www.linkedin.com/in/vansh-saxena-442b6a287/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-blue-600 hover:text-blue-700"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.github.com/VanshSa017"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <Github size={24} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
