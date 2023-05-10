// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
//const firebaseConfig = require("./firebase_conf.js");

const firebaseConfig = {
  apiKey: 'AIzaSyAdIkOi7RzjIhd1Asq26YbD3-OWziqFy4I',
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optionals

// console.log(firebaseConfig[process.env.REACT_APP_NODE_ENV].config)
console.log(firebaseConfig)


// Initialize Firebase
// const app = initializeApp(firebaseConfig[process.env.REACT_APP_NODE_ENV].config);
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

module.exports = auth