export default function ResultCountry({
  selectedCountry,
  back,
  codeCountry,
  darkMode,
}) {
  if (!codeCountry || codeCountry.length === 0) {
    return <p>loading</p>;
  }

  // if return object use object.entries()
  function backButton() {
    back(false);
  }

  return (
    <>
      <div
        className={` ${
          darkMode ? " bg-FEVeryDarkBlue text-FEWhite" : " light-mode"
        } h-screen  pt-4 px-6 font-light lg:px-20`}
      >
        <div
          onClick={() => backButton()}
          className={` ${
            darkMode ? "bg-FEDarkBlue shadow-slate-800" : "light-mode-whitebg"
          } px-3 py-2 mt-5  w-fit cursor-pointer rounded shadow-lg `}
        >
          Back
        </div>
        <div className="mt-10  md:grid grid-cols-4 grid-rows-2">
          <img
            src={selectedCountry[0].flags.png}
            className="py-5 row-span-2 col-span-2 w-full h-auto pr-20 md:py-0"
            alt=""
          />
          <div className="space-y-5 md:space-y-2">
            <h3 className="text-2xl font-bold">
              {selectedCountry[0].name.common}
            </h3>
            <p>
              <span className="font-semibold">Native Name: </span>
              {Object.values(selectedCountry[0].name.nativeName)[0].common}
            </p>
            <p>
              <span className="font-semibold">Population: </span>{" "}
              {selectedCountry[0].population}
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              {selectedCountry[0].region}
            </p>
            <p>
              <span className="font-semibold">Sub Region: </span>
              {selectedCountry[0].subregion}
            </p>
            <p>
              <span className="font-semibold">Capital: </span>
              {selectedCountry[0].capital}
            </p>
          </div>

          <div className="mt-10 space-y-5 md:space-y-2">
            <p>
              <span className="font-semibold">Top Level Domain: </span>
            </p>
            <p>
              <span className="font-semibold">Currencies: </span>
              {Object.values(selectedCountry[0].currencies)[0].name}
            </p>
            <p>
              <span className="font-semibold">Languages: </span>

              {Object.entries(selectedCountry[0].languages).map(
                ([key, value], index, array) => (
                  <span key={key}>
                    {value}
                    {index < array.length - 1 && <span>, </span>}
                  </span>
                )
              )}
            </p>
          </div>

          <div className="mt-10 pb-10 col-span-2 md:flex md:h-fit md:items-center">
            <h3 className=" text-xl my-3 font-semibold md:mr-4">
              Border Countries:
            </h3>
            <div className="flex flex-wrap text-base">
              {selectedCountry[0].borders.map((code) => {
                const fullName = codeCountry.find((item) => item.cca3 == code);
                return (
                  <div
                    className={` ${
                      darkMode
                        ? "bg-FEDarkBlue shadow-slate-700"
                        : "light-mode-whitebg"
                    } px-4 py-2 mr-3 my-3  rounded shadow-sm `}
                  >
                    {fullName.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
