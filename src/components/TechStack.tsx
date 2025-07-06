
import React from 'react';

const TechStack = () => {
  const technologies = {
    "Languages": [
      { name: "Python", color: "bg-yellow-500" },
      { name: "Java", color: "bg-red-600" }
    ],
    "Libraries & Frameworks": [
      { name: "NumPy", color: "bg-blue-600" },
      { name: "Pandas", color: "bg-purple-600" },
      { name: "Matplotlib", color: "bg-orange-500" },
      { name: "Scikit-Learn", color: "bg-green-600" },
      { name: "TensorFlow", color: "bg-orange-600" },
      { name: "PyTorch", color: "bg-red-500" }
    ],
    "Tools & Platforms": [
      { name: "Jupyter", color: "bg-orange-500" },
      { name: "Git", color: "bg-gray-700" },
      { name: "GitHub", color: "bg-gray-800" },
      { name: "VS Code", color: "bg-blue-500" },
      { name: "Anaconda", color: "bg-green-500" },
      { name: "Docker", color: "bg-blue-600" },
      { name: "MLflow", color: "bg-indigo-600" }
    ],
    "Cloud & Services": [
      { name: "AWS S3", color: "bg-orange-600" },
      { name: "SageMaker", color: "bg-orange-500" },
      { name: "Google Colab", color: "bg-yellow-500" }
    ]
  };

  return (
    <section id="tech-stack" className="py-20 px-6 bg-white/50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tech Stack & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to build intelligent systems and analyze data
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category}
              </h3>
              <div className="space-y-3">
                {techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills visualization */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white">
            <div className="text-3xl font-bold mb-2">Machine Learning</div>
            <div className="text-blue-100">Classification, Regression, Clustering</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl text-white">
            <div className="text-3xl font-bold mb-2">Deep Learning</div>
            <div className="text-purple-100">Neural Networks, CNN, NLP</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl text-white">
            <div className="text-3xl font-bold mb-2">Data Science</div>
            <div className="text-indigo-100">Analysis, Visualization, ETL</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
