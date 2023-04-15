import React from "react";

function IngredientRow(props) {
  const { ingredientsArr, setIngredientsArr, index } = props;


  const handleName = (e) => {
    const inputData = [...ingredientsArr]
    inputData[index]['name'] = e.target.value;
    setIngredientsArr(inputData); 
  }

  const handleQuantity = (e) => {
    const inputData = [...ingredientsArr]
    inputData[index]['quantity'] = Number(e.target.value);
    setIngredientsArr(inputData); 
  }

  const handleUnit = (e) => {
    const inputData = [...ingredientsArr]
    inputData[index]['unit'] = e.target.value;
    setIngredientsArr(inputData); 
  }

  return (
    <div className="one-item">
      <input
        value={ingredientsArr[index]['name']}
        onChange={handleName}
        type="text"
        placeholder="item"
      />
      <input
        value={ingredientsArr[index]['quantity']}
        onChange={handleQuantity}
        type="text"
        className="quantity"
        placeholder="quantity (Number)"
      />
      <input
        value={ingredientsArr[index]['unit']}
        onChange={handleUnit}
        type="text"
        className="quantity"
        placeholder="units (large, grams, ounces, etc.)"
      />
      <button onClick={(e) => {
        e.preventDefault();
        console.log(ingredientsArr)
      }}>test</button>
    </div>
  );
}

export default IngredientRow;
