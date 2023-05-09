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

// This is no longer needed

module.exports = router