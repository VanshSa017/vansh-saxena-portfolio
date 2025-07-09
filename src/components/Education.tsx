
import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "VIT Bhopal University",
      degree: "B.Tech Computer Science and Engineering",
      type: "Undergraduate",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-600"
    },
    {
      institution: "RK Senior Secondary School",
      degree: "XII - Senior Secondary",
      percentage: "92%",
      type: "Higher Secondary",
      icon: BookOpen,
      color: "from-green-500 to-blue-500"
    },
    {
      institution: "Stella Maris Inter College",
      degree: "X - Secondary",
      percentage: "96%",
      type: "Secondary",
      icon: Award,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 opacity-0 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:forwards]">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full opacity-0 animate-scale-in [animation-delay:0.4s] [animation-fill-mode:forwards]"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 opacity-0 animate-fade-in [animation-delay:${0.6 + index * 0.2}s] [animation-fill-mode:forwards]`}
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {edu.institution}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2 font-medium">
                    {edu.degree}
                  </p>
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm mb-4">
                    {edu.type}
                  </span>
                  {edu.percentage && (
                    <div className={`text-2xl font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                      {edu.percentage}
                    </div>
                  )}
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-200 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Achievement highlight */}
        <div className="mt-16 text-center opacity-0 animate-fade-in [animation-delay:1.4s] [animation-fill-mode:forwards]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Award className="w-5 h-5" />
            <span>Consistent Academic Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
