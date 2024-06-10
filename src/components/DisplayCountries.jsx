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
      <div className=" flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries.map((country, index) => (
          <div className="mb-6 max-w-72  bg-FEDarkBlue text-FEWhite m-auto">
            <img
              className="m-auto w-72 h-auto"
              src={country.flags.png}
              alt=""
            />

            <div className="px-4 py-7 ">
              <h3 className=" font-semibold">{country.name.official}</h3>
              <p className="">Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
