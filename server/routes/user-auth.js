const express = require("express");
const router = express.Router();
const knex = require("../../db/knex");


router.get('/hello', (req, res) => {
  res.send('world')
})

// This is no longer needed

module.exports = router