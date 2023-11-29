import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchInput, setSearchInput] = useState("")


  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => {
      setPlants(data)
    })
  }, [])


  function deletePlant(plantId) {

    fetch(`http://localhost:6001/plants/${plantId}`, {
      method: "DELETE"
    })

    const newArray = plants.filter((each) => {
      return each.id !== plantId
    })

    setPlants(newArray)  
  }

  function handleSearch(e) {
    setSearchInput(e.target.value)
    console.log(searchInput)
  }
  
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search plants={plants} setPlants={setPlants} searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch}/>
      <PlantList plants={plants} deletePlant={deletePlant} searchInput={searchInput} setSearchInput={setSearchInput}/>
    </main>
  );
}

export default PlantPage;
