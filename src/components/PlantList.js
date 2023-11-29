import React, { useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, deletePlant, searchInput }) {

  const filteredPlants = plants.filter((each) => {
    return each.name.toLowerCase().includes(searchInput.toLowerCase())
  })

  return (
    <ul className="cards">
      {filteredPlants.map((each) => {
        return <PlantCard key={each.id} id={each.id} name={each.name} image={each.image} price={each.price} deletePlant={deletePlant}/>
      })}
      </ul>
  );
}

export default PlantList;
