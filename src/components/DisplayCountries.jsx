import { useEffect, useState } from "react";

export default function DisplayCountries({ countries }) {
  // countries is array
  //create card for each countries

  const country = countries[9];
  if (!country) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>countries</p>
      <div className=" bg-slate-500">Countries</div>
      <ul>
        {countries.map((country, index) => (
          <p key={index}>{country.name.official}</p>
        ))}
      </ul>

      <div className=" bg-gray-700 flex flex-col ">
        {countries.map((country, index) => (
          <div className="mb-6 bg-neutral-300 max-w-96  m-auto">
            <img src={country.flags.png} alt="" srcset="" />
            <div className="px-4 py-7 ">
              <h3 className=" font-semibold">{country.name.official}</h3>
              <p className="">Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </div>
        ))}
      </div>

      <div className=" bg-gray-700 flex flex-col ">
        <div id="card" className=" mb-6 bg-neutral-300  m-auto  ">
          <img src={country.flags.png} alt="" srcset="" />
          <div className="px-4 py-7 ">
            <h3 className=" font-semibold">{country.name.official}</h3>
            <p className="">Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>

        <div id="card" className=" bg-neutral-300 m-auto ">
          <img src={country.flags.png} alt="" srcset="" />
          <div className="px-4 py-7">
            <h3 className=" font-semibold">{country.name.official}</h3>
            <p className="">Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>

        <div id="card" className=" bg-neutral-300 m-auto ">
          <img src={country.flags.png} alt="" srcset="" />
          <div className="px-4 py-7">
            <h3 className=" font-semibold">{country.name.official}</h3>
            <p className="">Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
      </div>
    </>
  );
}
