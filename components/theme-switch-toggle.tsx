"use client";

import { useTheme } from "@/context/theme-context";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";

export default function ThemeSwitchToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <FaToggleOn className="text-red-500 text-xl" />
      ) : (
        <FaToggleOff className="text-red-500 text-xl" />
      )}
    </button>
  );
}
