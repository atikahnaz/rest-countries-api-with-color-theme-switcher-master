export default function ResultCountry({ selectedCountry, back }) {
  console.log(selectedCountry);
  console.log(selectedCountry[0].name.official);
  console.log(selectedCountry[0].currencies);
  console.log(selectedCountry[0].languages);

  // if return object use object.entries()
  function backButton() {
    back(false);
  }

  return (
    <>
      <div className=" h-dvh text-FEWhite ">
        <div onClick={() => backButton()}>Back</div>
        <div className=" ">
          <img src={selectedCountry[0].flags.png} alt="" />
          <div>
            <h3>{selectedCountry[0].name.official}</h3>
            <p>
              Native Name: {selectedCountry[0].name.nativeName.eng.official}
            </p>
            <p>Population: {selectedCountry[0].population}</p>
            <p>Region: {selectedCountry[0].region}</p>
            <p>Sub Region: {selectedCountry[0].subregion}</p>
            <p>Capital: {selectedCountry[0].capital}</p>
          </div>

          <div>
            <p>Top Level Domain: </p>
            <p>Currencies: {selectedCountry.currencies}</p>
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
        </div>
      </div>
    </>
  );
}
