import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, displayedPlants }) {
  return (
    <ul className="cards">
      {displayedPlants.map((each) => {
        return <PlantCard key={each.id} name={each.name} image={each.image} price={each.price}/>
      })}
      </ul>
  );
}

export default PlantList;
