import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [soldOut, setSoldOut] = useState(false)

  function setStock() {
    setSoldOut(!soldOut)
  }


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {soldOut ? (
        <button onClick={setStock}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={setStock}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
