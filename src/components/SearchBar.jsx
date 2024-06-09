import { useEffect, useState } from "react";

export default function SearchBar({ search }) {
  const [searchCountry, setSearchCountry] = useState("");
  const handleInputChange = (event) => {
    setSearchCountry(event.target.value);
    console.log(searchCountry);
  };

  // callback function to send data to parent component
  const clickSearch = () => {
    search(searchCountry);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex flex-col justify-between px-5 pb-5 bg-FEVeryDarkBlueBg">
        <input
          className="px-5 py-2 my-5 bg-FEDarkBlue text-FEWhite"
          placeholder="Search for a country"
          type="search"
          value={searchCountry}
          onChange={handleInputChange}
        />

        <form action="" method="get">
          <select
            className="  text-FEWhite bg-FEDarkBlue px-5 py-2 rounded"
            name="region"
            id="region"
            value="test"
          >
            <option value="filter">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Eu">Eu</option>
          </select>
        </form>
      </div>
    </>
  );
}