import React, { useState } from "react";

function IngredientRow() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("grams");

  return (
    <div className="one-item">
      <input
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
        type="text"
        placeholder="item"
      />
      <input
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
        type="text"
        className="quantity"
        placeholder="quantity"
      />
      <select
        value={unit}
        onChange={(e) => {
          setUnit(e.target.value);
        }}
        name="types"
        id="units"
      >
        <option value="grams">grams</option>
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
      </select>
      <button onClick={(e) => {
        e.preventDefault();
        console.log(item, quantity, unit)
      }}>test</button>
    </div>
  );
}

export default IngredientRow;
