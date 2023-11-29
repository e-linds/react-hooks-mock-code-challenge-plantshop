import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => setPlants(data))
  }, [])

  function filterPlants(input) {
    const newArray = plants.filter((each) => {
      return each.name.toLowerCase().includes(input.toLowerCase())
    })
    setPlants(newArray)
  }


  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search filterPlants={filterPlants}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
