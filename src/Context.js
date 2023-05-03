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

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
