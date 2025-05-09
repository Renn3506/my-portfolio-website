 "use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
      >
        Toggle Theme
      </button>
      {children}
    </div>
  );
}
