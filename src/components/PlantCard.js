import React, { useState } from "react";

function PlantCard({ id, name, image, price, deletePlant }) {
  const [soldOut, setSoldOut] = useState(false)
  const [variablePrice, setVariablePrice] = useState(price)
  const [priceField, setPriceField] = useState("")

  function setStock() {
    setSoldOut(!soldOut)
  }

  function updatePrice (e) {
    e.preventDefault()

    const newPrice = e.target.newPrice.value

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({price: newPrice})
    })

    setVariablePrice(newPrice)

    setPriceField("")



  }


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${variablePrice}</p>
       <form onSubmit={(e) => updatePrice(e)}>
          <input 
          type="text" 
          id="update-price-button" 
          name="newPrice" 
          value={priceField}
          placeholder="enter new price"
          onChange={(e) => setPriceField(e.target.value)}
          ></input>
        </form>
      {soldOut ? (
        <button onClick={setStock}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={setStock}>In Stock</button>
      )}
      <button id="delete-plant" onClick={() => deletePlant(id)}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
