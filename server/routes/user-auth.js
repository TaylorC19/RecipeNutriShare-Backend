const express = require("express");
const router = express.Router();
const {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} = require("firebase/auth");
const knex = require("../../db/knex");
const auth = require('../firebase/firebase')

router.get('/hello', (req, res) => {
  res.send('world')
})

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
  
    //console.log(userCred);
    res.send(userCred);
    
  } catch (error) {
    console.log(error);
    res.send(false);
  }

});

router.post("/signup", async (req, res) => {
  const { email, password, uid } = req.body;

  try {

    console.log(uid);

    await knex("users").insert({ uid: uid });
    //console.log(userCred);
    res.send(userCred);
  } catch (error) {
    console.log(error);
    res.send(false);
  }
});

module.exports = router