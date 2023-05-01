import React from "react";
import './IngredientRow.css'

function IngredientRow(props) {
  const { ingredientsArr, setIngredientsArr, index } = props;


  const handleName = (e) => {
    const inputData = [...ingredientsArr];
    inputData[index]['name'] = e.target.value;
    setIngredientsArr(inputData);
  }

  const handleQuantity = (e) => {
    const inputData = [...ingredientsArr];
    inputData[index]['quantity'] = Number(e.target.value);
    setIngredientsArr(inputData); 
  }

  const handleUnit = (e) => {
    const inputData = [...ingredientsArr];
    inputData[index]['unit'] = e.target.value;
    setIngredientsArr(inputData); 
  }
  
  const handleDeleteButton = (e) => {
    e.preventDefault();
    console.log('delete endpoint')
    const inputData = [...ingredientsArr];
    inputData.splice(index, 1);
    setIngredientsArr(inputData);
  }

  return (
    <div className="one-item">
      <input
        value={ingredientsArr[index]['name']}
        onChange={handleName}
        type="text"
        className="name"
        placeholder="ingredient"
      />
      <input
        value={ingredientsArr[index]['quantity']}
        onChange={handleQuantity}
        type="number"
        className="quantity"
        placeholder="quantity"
      />
      <input
        value={ingredientsArr[index]['unit']}
        onChange={handleUnit}
        type="text"
        className="unit"
        placeholder="units"
      />
      <button onClick={handleDeleteButton}>🗑️</button>
    </div>
  );
}

export default IngredientRow;
