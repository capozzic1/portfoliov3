import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import styles from './theme-switch.module.scss'
export default function ThemeToggle() {

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

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme" className={styles.themeToggle}>
      {theme === "light" ? <FaMoon /> : <IoSunny />}
    </button>
  );
}