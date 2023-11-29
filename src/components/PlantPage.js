import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [displayedPlants, setDisplayedPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => {
      setPlants(data)
      setDisplayedPlants(data)
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
    setDisplayedPlants(newArray)
  
  }

  
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} displayedPlants={displayedPlants} setDisplayedPlants={setDisplayedPlants}/>
      <Search plants={plants} setPlants={setPlants} displayedPlants={displayedPlants} setDisplayedPlants={setDisplayedPlants}/>
      <PlantList plants={plants} displayedPlants={displayedPlants} deletePlant={deletePlant}/>
    </main>
  );
}

export default PlantPage;
