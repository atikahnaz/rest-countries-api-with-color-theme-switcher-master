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

  // store information of all countries
  async function ListCountries() {
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

  // render all countries when reload
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

  // filter countries based on region
  // data = eg."asia"
  const region = (data) => {
    const regionList = countries.filter((country) => country.region == data);
    setCountriesRegion(regionList);
  };

  const back = (data) => {
    setSearchText(data);
    setHideSearchBar(false);
  };

  function changeMode(data) {
    setDarkMode(data);
  }

  useEffect(() => {}, [searchText]);

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
      ) : countriesRegion.length === 0 ? (
        <DisplayCountries
          countries={countries}
          darkMode={darkMode}
          infoCountry={textCountry}
        />
      ) : (
        <DisplayCountries
          countries={countriesRegion}
          darkMode={darkMode}
          infoCountry={textCountry}
        />
      )}
    </div>
  );
}

export default App;
