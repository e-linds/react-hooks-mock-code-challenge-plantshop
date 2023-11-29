import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, displayedPlants, deletePlant }) {
  return (
    <ul className="cards">
      {displayedPlants.map((each) => {
        return <PlantCard key={each.id} id={each.id} name={each.name} image={each.image} price={each.price} deletePlant={deletePlant}/>
      })}
      </ul>
  );
}

export default PlantList;
