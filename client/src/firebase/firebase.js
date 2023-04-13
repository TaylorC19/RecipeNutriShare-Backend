// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
const firebaseConfig = {
  apiKey: "AIzaSyAdIkOi7RzjIhd1Asq26YbD3-OWziqFy4I",
  authDomain: "meal-prep-app-96cf8.firebaseapp.com",
  projectId: "meal-prep-app-96cf8",
  storageBucket: "meal-prep-app-96cf8.appspot.com",
  messagingSenderId: "101048761248",
  appId: "1:101048761248:web:2a7b750b9fb66c0d5f82c5",
  measurementId: "G-19825W6XFD"
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

module.exports = auth