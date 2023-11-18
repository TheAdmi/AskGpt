import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isCurrentlyDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isCurrentlyDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", darkMode);
  };

  return (
    <nav className="container p-6 mx-auto justify-between">
      <div className="flex items-center justify-between px-2">
        <p className="text-2xl font-bold leading-none tracking-normal dark:text-white md:text-3xl md:tracking-tight text-gray-900">Ask<span className="text-rose-500">GPT</span></p>
        <div>
          <span onClick={toggleDarkMode} className="cursor-pointer">
            {darkMode ? (
              <MoonIcon className="h-6 w-6 text-rose-500" />
            ) : (
              <SunIcon className="h-6 w-6 text-rose-500" />
            )}
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;