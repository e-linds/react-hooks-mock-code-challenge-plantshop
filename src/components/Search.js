import React from "react";

function Search({ handleSearch }) {

   return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
}

export default Search;
