import { useState, useEffect, useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import styles from './theme-switch.module.scss'
import { AppThemeContext } from "../context/useTheme";
export default function ThemeToggle() {

  const { theme } = useContext(AppThemeContext)

  return (
    <button aria-label="Toggle theme" className={styles.themeToggle}>
      {theme === "light" ? <FaMoon /> : <IoSunny />}
    </button>
  );
}