export default function DisplayCountries({ countries, darkMode, infoCountry }) {
  // card clicked to display information
  // callback function to App.jsx
  function searchCountry(index) {
    infoCountry(index);
  }

  return (
    <>
      <div
        className={` ${
          darkMode ? " bg-FEVeryDarkBlueBg" : " bg-FEVeryLightGrayBg"
        } flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:px-10`}
      >
        {countries.map((country, key) => (
          <div
            key={key}
            onClick={() => searchCountry(country.name.common)}
            className={`${
              darkMode ? "dark-mode" : "light-mode-whitebg"
            } mb-10 rounded m-auto max-w-72 shadow-md font-light`}
          >
            <img
              className="m-auto w-72 h-auto"
              src={country.flags.png}
              alt=""
            />

            <div className="px-4 py-7 space-y-2 ">
              <h3 className=" font-extrabold text-xl pb-4">
                {country.name.official}
              </h3>
              <p>
                <span className="font-semibold">Population: </span>
                {country.population}
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {country.capital}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
