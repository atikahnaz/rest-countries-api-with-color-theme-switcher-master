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
        } flex flex-col pt-64 sm:pt-48 sm:grid sm:gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:px-10`}
      >
        {countries.map((country, key) => (
          <div
            key={key}
            onClick={() => searchCountry(country.name.common)}
            className={`${
              darkMode ? "dark-mode" : "light-mode-whitebg"
            } mb-10 h-full w-full  rounded m-auto max-w-72 shadow-md font-light`}
          >
            <div className="">
              <img
                className="m-auto h-44 w-full object-fill"
                src={country.flags.png}
                alt=""
              />
            </div>

            <div className="px-4 pt-5">
              <h3 className=" font-extrabold text-xl pb-4">
                {country.name.common}
              </h3>
            </div>

            <div className="px-4 space-y-2 ">
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
