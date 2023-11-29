import React, { useState } from "react";

function Search({ filterPlants }) {
  const [searchInput, setSearchInput] = useState("")


  function handleSearch(e) {
    setSearchInput(e.target.value)

    filterPlants(searchInput)

  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchInput}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
}

export default Search;
