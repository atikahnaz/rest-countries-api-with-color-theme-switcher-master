export default function ResultCountry({ selectedCountry, back, codeCountry }) {
  console.log(selectedCountry);
  console.log(selectedCountry[0].name.official);
  console.log(selectedCountry[0].currencies);
  console.log(selectedCountry[0].languages);
  if (!codeCountry || codeCountry.length === 0) {
    return <p>loading</p>;
  }

  // if return object use object.entries()
  function backButton() {
    back(false);
  }

  return (
    <>
      <div className=" h-full text-FEWhite pt-4 px-6">
        <div
          onClick={() => backButton()}
          className="px-3 py-2 mt-5 bg-FEDarkBlue w-fit cursor-pointer rounded shadow-lg shadow-slate-800"
        >
          Back
        </div>
        <div className="mt-10 ">
          <img src={selectedCountry[0].flags.png} className="py-5" alt="" />
          <div className="space-y-5">
            <h3 className="text-2xl font-bold">
              {selectedCountry[0].name.common}
            </h3>
            <p>
              Native Name:
              {Object.values(selectedCountry[0].name.nativeName)[0].common}
            </p>
            <p>Population: {selectedCountry[0].population}</p>
            <p>Region: {selectedCountry[0].region}</p>
            <p>Sub Region: {selectedCountry[0].subregion}</p>
            <p>Capital: {selectedCountry[0].capital}</p>
          </div>

          <div className="mt-10 space-y-5">
            <p>Top Level Domain: </p>
            <p>
              Currencies: {Object.values(selectedCountry[0].currencies)[0].name}
            </p>
            <p>
              Languages:
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

          <div className="mt-10 ">
            <h3 className=" text-xl my-3">Border Countries:</h3>
            <div className="flex flex-wrap text-base">
              {selectedCountry[0].borders.map((code) => {
                const fullName = codeCountry.find((item) => item.cca3 == code);
                return (
                  <div className="px-4 py-2 mr-3 my-3 bg-FEDarkBlue rounded shadow-sm shadow-slate-700">
                    {fullName.name}
                  </div>
                );
              })}
            </div>
            <div>{console.log(codeCountry[0])}</div>
          </div>
        </div>
      </div>
    </>
  );
}
