const express = require("express");
const path = require("path");
const auth = require("./firebase/firebase");
const {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} = require("firebase/auth");
const knex = require("../db/knex");
const axios = require("axios");
const nutrition = require('./utils/nutrition-api')

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
    const {uid, query, recipeInfo} = req.body;
    const requestQuery = {
      query: query
    }
    
    const nutritionInfo = await nutrition(requestQuery, apiHeader);

    

    res.send([uid, nutritionInfo, recipeInfo]);
  });

  app.post("/auth/signin", async (req, res) => {
    const { email, password } = req.body;

    const userCred = await signInWithEmailAndPassword(auth, email, password);

    //console.log(userCred);
    res.send(userCred);
  });

  app.post("/auth/signup", async (req, res) => {
    const { email, password } = req.body;

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(userCred);

      const uid = userCred.user.uid;

      console.log(uid);

      await knex("users").insert({ uid: uid });
      //console.log(userCred);
      res.send(userCred);
    } catch (error) {
      console.log(error);
      res.send(false);
    }
  });

  return app;
}

module.exports = setupServer;
