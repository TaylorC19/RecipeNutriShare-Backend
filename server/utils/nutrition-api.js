const axios = require("axios");

async function nutrition(ingredients, header) {
  const ingredientsArr = [];
  const nutritionObj = { totalCalories: 0, totalProtein : 0, totalCarbohydrates: 0};
  const nutritionInfo = await axios
    .post(
      "https://trackapi.nutritionix.com/v2/natural/nutrients",
      ingredients,
      { headers: header }
    )
    .then((response) => response.data.foods);
  nutritionInfo.forEach((element) => {
    const ingredientObj = {
      name: element["food_name"],
      quantity: element["serving_qty"],
      unit: element["serving_unit"],
      calories: element["nf_calories"],
      protein: element["nf_protein"],
      carbohydrates: element["nf_total_carbohydrate"]
    };
    ingredientsArr.push(ingredientObj);
    nutritionObj.totalCalories =
      nutritionObj.totalCalories + element["nf_calories"];
    nutritionObj.totalProtein =
      nutritionObj.totalProtein + element["nf_protein"];
    nutritionObj.totalCarbohydrates =
      nutritionObj.totalCarbohydrates + element["nf_total_carbohydrate"];
  });

  // return nutritionInfo
  return { ingredientsArr: ingredientsArr, nutritionObj: nutritionObj };
}

module.exports = nutrition;
