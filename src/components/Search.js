import React, { useState } from "react";

function Search({ plants, setPlants, displayedPlants, setDisplayedPlants }) {
  const [searchInput, setSearchInput] = useState("")

  function handleSearch(e) {
    setSearchInput(e.target.value)

    if (searchInput === "") {
      setDisplayedPlants(plants)
    } else {

    const newArray = plants.filter((each) => {
        return each.name.toLowerCase().includes(searchInput.toLowerCase())
      })
      
    setDisplayedPlants(newArray)

    }
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
