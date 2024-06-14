import { useState, useEffect } from "react";
import Moon from "../images/light-mode.png";
import MoonBlackLine from "../images/dark-mode.png";
import "../index.css";

export default function NavigationBar({ changeMode }) {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  useEffect(() => {
    changeMode(darkMode);
  }, [darkMode]);

  return (
    <>
      <div
        className={`flex justify-between md:px-20 ${
          darkMode ? "dark-mode" : "light-mode-whitebg"
        }  text-FEWhite px-5 py-8 shadow-sm  mb-2`}
      >
        <div className=" font-semibold">Where in the world?</div>

        <div
          className="flex items-center h-5 cursor-pointer"
          onClick={toggleDarkMode}
        >
          <div className="h-full">
            <img
              src={darkMode ? Moon : MoonBlackLine}
              alt="Moon"
              className="h-full"
            />
          </div>
          <div className="ml-2 font-semibold">Dark Mode</div>
        </div>
      </div>
    </>
  );
}
