import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // State to store theme (light or dark)
  const [theme, setTheme] = useState('light');

  // Check localStorage for existing theme on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme; // Apply saved theme to body
    }
  }, []);

  // Toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Persist theme to localStorage
    document.body.className = newTheme; // Apply new theme to body
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
