import { createContext, useContext, useEffect, useState } from "react";

export const AppThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function AppThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
    return <AppThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </AppThemeContext.Provider>

}