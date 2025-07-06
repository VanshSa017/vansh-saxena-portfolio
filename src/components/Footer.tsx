
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Vansh Saxena</h3>
            <p className="text-gray-400">Data Science & AI Enthusiast</p>
          </div>

          <div className="flex gap-6 mb-6 md:mb-0">
            <a
              href="https://www.github.com/VanshSa017"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors hover:scale-110 transform duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vansh-saxena-442b6a287/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:vanshsaxena7781@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors hover:scale-110 transform duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Vansh Saxena. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
