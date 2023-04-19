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

  const userCred = await signInWithEmailAndPassword(auth, email, password);

  //console.log(userCred);
  res.send(userCred);
});

router.post("/signup", async (req, res) => {
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

module.exports = router