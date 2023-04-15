const express = require('express');
const path = require('path');
const auth = require('./firebase/firebase');
const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = require('firebase/auth');
const knex = require('../db/knex');

function setupServer () {
  const app = express();

  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, '../client/build')))

  // Add endpoints here

  app.get('/api/hello', (req, res) => {
    res.send('world');
  });

  app.get('/auth/get-auth', (req, res) => {
    res.send(auth);
  })

  app.post('/auth/signin', async (req, res) => {
    const { email, password } = req.body

    const userCred = await signInWithEmailAndPassword(auth, email, password)

    //console.log(userCred);
    res.send(userCred);
  })

  app.post('/auth/signup', async (req, res) => {
    const { email, password } = req.body

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
  
      console.log(userCred);

      const uid = userCred.user.uid;

      console.log(uid);
  
      await knex('users').insert({'uid': uid})
      //console.log(userCred);
      res.send(userCred);
      
    } catch (error) {
      console.log(error);
      res.send(false);
    }
  })

  return app;
}

module.exports = setupServer;