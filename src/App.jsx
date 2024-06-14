import { useState, useEffect } from "react";
import NavigationBar from "./components/Nav.jsx";
import DisplayCountries from "./components/DisplayCountries.jsx";
import ResultCountry from "./components/ResultCountry.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";
import "./index.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesRegion, setCountriesRegion] = useState([]);
  const [searchText, setSearchText] = useState(null);
  const [codeCountry, setCodeCountry] = useState([]);
  const [hideSearchBar, setHideSearchBar] = useState(false);
  const [darkMode, setDarkMode] = useState(null);
  const [displayNoResult, setDisplayNoResult] = useState(false);

  async function ListCountries() {
    // store info countries
    const data = await fetch("https://restcountries.com/v3.1/all").then(
      (response) => response.json()
    );
    setCountries(data);

    // code for each country
    const codeName = data.map((country) => ({
      name: country.name.common,
      cca3: country.cca3,
    }));
    setCodeCountry(codeName);
  }

  useEffect(() => {
    ListCountries();
  }, []);

  // handle data pass from child component (SearchBar.jsx)
  // find the country based on data text (country name) from countries array
  const textCountry = (data) => {
    const text = data.toLowerCase();
    const selectedCountry = countries.filter(
      (country) => country.name.common.toLowerCase() == text
    );
    if (selectedCountry.length === 0) {
      setSearchText(null);
    } else {
      setSearchText(selectedCountry);
      setHideSearchBar(true);
    }
  };

  // data = "asia"
  const region = (data) => {
    const regionList = countries.filter((country) => country.region == data);
    setCountriesRegion(regionList);
  };

  function codeList() {
    // iterate countries and store the code and name
    const codeName = countries.map((country) => ({
      name: country.name.common,
      cca3: country.cca3,
    }));
    setCodeCountry(codeName);
    console.log(codeCountry);
  }

  const back = (data) => {
    setSearchText(data);
    setHideSearchBar(false);
  };

  function changeMode(data) {
    setDarkMode(data);
  }

  return (
    <div
      className={`h-full font-FENunito ${
        darkMode ? "bg-FEVeryDarkBlueBg" : "bg-FEVeryLightGrayBg"
      }`}
    >
      <NavigationBar changeMode={changeMode} />
      {!hideSearchBar && (
        <SearchBar
          search={textCountry}
          searchRegion={region}
          darkMode={darkMode}
        />
      )}

      {searchText ? (
        <ResultCountry
          selectedCountry={searchText}
          back={back}
          codeCountry={codeCountry}
          darkMode={darkMode}
        />
      ) : countriesRegion.length === 0 ? ( // problem when clicking the region twice
        <DisplayCountries countries={countries} darkMode={darkMode} />
      ) : (
        <DisplayCountries countries={countriesRegion} darkMode={darkMode} />
      )}
    </div>
  );
}

export default App;
