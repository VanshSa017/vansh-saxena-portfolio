
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Data Science and Machine Learning enthusiast</span> with a deep fascination for artificial intelligence and its potential to revolutionize how we solve complex problems.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in AI and ML is driven by curiosity and the desire to create intelligent systems that can make a meaningful impact. I specialize in building end-to-end machine learning solutions, from data preprocessing and model development to deployment and monitoring.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Whether it's detecting fraud in financial transactions, classifying medical images for healthcare applications, or parsing resumes with NLP techniques, I love tackling challenging problems that combine technical innovation with real-world impact.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                <div className="text-gray-600 dark:text-gray-300">ML Projects</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                <div className="text-gray-600 dark:text-gray-300">Technologies</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-2xl transform -rotate-6"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 mx-auto">
                    VS
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Vansh Saxena</h3>
                  <p className="text-gray-600 dark:text-gray-300">Data Scientist</p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
