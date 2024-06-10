import { useState, useEffect } from "react";
import NavigationBar from "./components/Nav.jsx";
import DisplayCountries from "./components/DisplayCountries.jsx";
import ResultCountry from "./components/ResultCountry.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function ListCountries() {
    const data = await fetch("https://restcountries.com/v3.1/all").then(
      (response) => response.json()
    );
    setCountries(data);
    console.log(data);
    console.log(data[0].name.official);
    console.log(data[0].capital);
    console.log(data[0].population);
    console.log(data[0].region);
  }

  useEffect(() => {
    ListCountries();
  }, []);

  // handle data pass from child component (SearchBar.jsx)
  // find the country based on data text (country name) from countries array
  const textCountry = (data) => {
    console.log(data);
    const text = data.toLowerCase();
    console.log(text);
    const selectedCountry = countries.filter(
      (country) => country.name.official.toLowerCase() == text
    );
    setSearchText(selectedCountry);
  };

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  return (
    <div className=" bg-FEVeryDarkBlueBg">
      <NavigationBar />
      <SearchBar search={textCountry} />
      {searchText ? (
        <ResultCountry selectedCountry={searchText} />
      ) : (
        <DisplayCountries countries={countries} />
      )}
    </div>
  );
}

export default App;
