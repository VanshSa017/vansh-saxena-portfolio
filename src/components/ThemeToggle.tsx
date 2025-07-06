
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 opacity-0 animate-fade-in [animation-delay:2.5s] [animation-fill-mode:forwards]"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <div className="w-5 h-5 bg-yellow-400 rounded-full animate-pulse"></div>
      ) : (
        <div className="w-5 h-5 bg-gray-700 rounded-full relative">
          <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      )}
    </button>
  );
};

export default ThemeToggle;
