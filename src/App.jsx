import { useState } from "react";

import NavigationBar from "./components/Nav.jsx";
import DisplayCountries from "./components/DisplayCountries.jsx";

import "./App.css";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <DisplayCountries />
      <h1>hello</h1>
    </>
  );
}

export default App;
