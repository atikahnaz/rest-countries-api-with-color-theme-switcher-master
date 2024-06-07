export default function NavigationBar() {
  return (
    <>
      <div className="flex justify-between">
        <div>Where in the world?</div>
        <div>Dark Mode</div>
      </div>
      <div className="flex justify-between">
        <input
          className=" "
          placeholder="Search for a country"
          type="search"
          name=""
          id=""
        />
        <form action="" method="get">
          <select name="region" id="region">
            <option value="">Filter by region</option>
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
