import React, { useState } from "react";

const DarkSideSwitch = () => {
  const isDark =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const [isDarkSide, setIsDarkSide] = useState(isDark);

  const themeHandler = () => {
    if (isDarkSide) {
      document.documentElement.classList.add("dark");
      setIsDarkSide(!isDarkSide);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkSide(!isDarkSide);
    }
    console.log(isDarkSide, document.documentElement.classList);
  };

  return (
    <>
      <label className="relative inline-flex items-center mb-5 cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isDarkSide}
          onChange={themeHandler}
        />
        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </>
  );
};

export default DarkSideSwitch;
