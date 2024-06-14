import { useEffect, useState } from "react";
import searchIcon from "../images/search.svg";

export default function SearchBar({ search, searchRegion, darkMode }) {
  const [searchCountry, setSearchCountry] = useState("");
  const [filter, setFilter] = useState("");
  const [optionText, setOptionText] = useState("Filter by region");

  const handleInputChange = (event) => {
    setSearchCountry(event.target.value);
    console.log(searchCountry);
  };

  // callback function to send data to parent component
  const clickSearch = () => {
    search(searchCountry);
  };

  const filterByRegion = (event) => {
    setFilter(event.target.value);
    setOptionText(event.target.value);
    //searchRegion(filter);
  };

  useEffect(() => {
    searchRegion(filter);
  }, [filter]);

  return (
    <>
      <div
        className={` md:flex-row flex flex-col justify-between px-5 pb-5 md:px-20  ${
          darkMode ? "bg-FEVeryDarkBlueBg" : " bg-FEVeryLightGrayBg"
        } `}
      >
        <div
          id="input-wrapper"
          className={`${
            darkMode ? "dark-mode" : "light-mode"
          } flex items-center shadow-md my-5 px-5`}
        >
          <svg
            onClick={clickSearch}
            className=" fill-slate-500 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="20px"
            height="20px"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
          </svg>
          <input
            className={`px-5 py-2 ${
              darkMode ? "dark-mode" : "light-mode"
            } w-full focus:outline-none`}
            placeholder="Search for a country"
            type="search"
            value={searchCountry}
            onChange={handleInputChange}
          />
        </div>

        <form action="" method="get" className="py-5">
          <select
            className={`${
              darkMode ? "dark-mode" : "light-mode-whitebg"
            } px-5  py-2 rounded focus:outline-none shadow-md`}
            name="region"
            id="region"
            value="test"
            onChange={filterByRegion}
          >
            <option value="default" id="filter" className=" hidden">
              {optionText}
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form>
      </div>
    </>
  );
}
