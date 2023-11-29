import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((each) => {
        return <PlantCard key={each.id} name={each.name} image={each.image} price={each.price}/>
      })}
      </ul>
  );
}

export default PlantList;
