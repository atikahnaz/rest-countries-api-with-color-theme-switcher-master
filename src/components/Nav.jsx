import { useState, useEffect } from "react";
import Moon from "../images/light-mode.png";
import "../index.css";

export default function NavigationBar({ changeMode }) {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  useEffect(() => {
    console.log(darkMode);
    changeMode(darkMode);
  }, [darkMode]);

  return (
    <>
      <div
        className={`flex justify-between ${
          darkMode ? "dark-mode" : "light-mode"
        }  text-FEWhite px-5 py-8`}
      >
        <div>Where in the world?</div>

        <div className="flex items-center h-5" onClick={toggleDarkMode}>
          <div className="h-full">
            <img src={Moon} alt="Moon" className="h-full" />
          </div>
          <div className="ml-2">Dark Mode</div>
        </div>
      </div>
    </>
  );
}
