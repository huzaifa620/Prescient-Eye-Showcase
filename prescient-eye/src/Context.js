import React, { createContext, useState } from 'react';

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle('dark')
    setIsDark(!isDark);
  };

  const [section, setSection] = useState([1,0,0,0])

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, section, setSection }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
