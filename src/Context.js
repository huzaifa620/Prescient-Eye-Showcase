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

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, openMenu, setOpenMenu }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
