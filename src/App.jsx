import { useState, useEffect } from "react";
import NavigationBar from "./components/Nav.jsx";
import DisplayCountries from "./components/DisplayCountries.jsx";
import ResultCountry from "./components/ResultCountry.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

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
  const textCountry = (data) => {};

  return (
    <div className=" bg-FEVeryDarkBlueBg">
      <NavigationBar />
      <SearchBar searchCountry={textCountry} />
      <ResultCountry />

      <DisplayCountries countries={countries} />
      <h1>hello</h1>
    </div>
  );
}

export default App;
