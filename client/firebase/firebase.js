// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
const firebaseConfig = require("./firebase_conf.js");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
const app = initializeApp(firebaseConfig[process.env.NODE_ENV].config);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

module.exports = auth