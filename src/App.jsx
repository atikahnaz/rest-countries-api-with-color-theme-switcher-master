import { useState, useEffect } from "react";

import NavigationBar from "./components/Nav.jsx";
import DisplayCountries from "./components/DisplayCountries.jsx";
import ResultCountry from "./components/ResultCountry.jsx";
import "./App.css";

function App() {
  async function ListCountries() {
    const countries = await fetch("https://restcountries.com/v3.1/all").then(
      (response) => response.json()
    );
    console.log(countries);
  }

  useEffect(() => {
    ListCountries();
  }, []);

  return (
    <>
      <NavigationBar></NavigationBar>
      <DisplayCountries />
      <ResultCountry />
      <h1>hello</h1>
    </>
  );
}

export default App;
