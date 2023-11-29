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

  
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} displayedPlants={displayedPlants} setDisplayedPlants={setDisplayedPlants}/>
      <Search plants={plants} setPlants={setPlants} displayedPlants={displayedPlants} setDisplayedPlants={setDisplayedPlants}/>
      <PlantList plants={plants} displayedPlants={displayedPlants}/>
    </main>
  );
}

export default PlantPage;
