const express = require("express");
const path = require("path");
const auth = require("./firebase/firebase");
const {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} = require("firebase/auth");
const knex = require("../db/knex");
const axios = require("axios");
const nutrition = require("./utils/nutrition-api");
const getRandomItem = require("./utils/getRandomItem");

//routes
const authRouter = require("./routes/user-auth");

const apiHeader = {
  "x-app-id": process.env.X_APP_ID,
  "x-app-key": process.env.X_APP_KEY,
  "x-remote-user-id": process.env.X_REMOTE_USER_ID,
  "Content-Type": "application/json",
};

function setupServer() {
  const app = express();

  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, "../client/build")));

  //routes
  app.use("/auth", authRouter);

  // Add endpoints here

  app.get("/api/hello", (req, res) => {
    res.send("world");
  });

  app.post("/nutrition/info", async (req, res) => {
    const ingredients = {
      query: req.body.ingredients,
    };

    //below is test purposes
    // const nutritionInfo = await axios.post('https://trackapi.nutritionix.com/v2/natural/nutrients', ingredients, {headers: apiHeader});
    // res.send(nutritionInfo.data);

    const nutritionInfo = await nutrition(ingredients, apiHeader);

    res.send(nutritionInfo);
  });

  app.post("/api/recipe", async (req, res) => {
    const { uid, query, recipeInfo } = req.body;
    const requestQuery = {
      query: query,
    };

    try {
      const nutritionInfo = await nutrition(requestQuery, apiHeader);

      const newRecipe = {
        user_uid: uid,
        ...recipeInfo,
        ingredients: JSON.stringify(nutritionInfo.ingredientsArr),
        total_calories: nutritionInfo.nutritionObj.totalCalories,
        total_protein: nutritionInfo.nutritionObj.totalProtein,
        total_carbohydrates: nutritionInfo.nutritionObj.totalCarbohydrates,
        calories_per_serving:
          nutritionInfo.nutritionObj.totalCalories / recipeInfo.servings,
      };

      const writeRecipe = await knex("recipes").insert(newRecipe);

      console.log(writeRecipe);
      res.send(newRecipe);
    } catch (error) {
      console.error(error);
      res.status(400).send(false);
    }
  });

  app.get("/api/recipes/:uid", async (req, res) => {
    const uid = req.params.uid;

    const myRecipes = await knex("recipes")
      .select()
      .where("user_uid", uid)
      .orderBy("id", "desc");

    res.send(myRecipes);
  });

  app.get("/api/public-recipes", async (req, res) => {
    const publicRecipes = await knex("recipes")
      .select()
      .where("is_public", true)
      .orderBy("id", "desc");

    res.send(publicRecipes);
  });

  app.get("/api/random-recipe", async (req, res) => {
    const publicRecipes = await knex("recipes")
      .select()
      .where("is_public", true)
      .orderBy("id", "desc");

    const highlight = getRandomItem(publicRecipes);

    res.send(highlight);
  });

  app.delete(
    "/api/delete-recipe/user/:uid/recipe/:recipeid",
    async (req, res) => {
      const { uid, recipeid } = req.params;

      try {
        await knex("recipes").where({ user_uid: uid, id: recipeid }).del();

        res.send(true);
      } catch (error) {
        console.log(error);
        res.status(500).send(false);
      }
    }
  );

  return app;
}

module.exports = setupServer;
