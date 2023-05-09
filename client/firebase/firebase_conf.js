// require("dotenv").config({
//   path: "./.env",
// });

module.exports = {
  development: {
    config: {
      apiKey: AIzaSyAdIkOi7RzjIhd1Asq26YbD3-OWziqFy4I,
      authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FB_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FB_APP_ID,
      measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
    }
  },
  production: { 
    config: {
      apiKey: AIzaSyAdIkOi7RzjIhd1Asq26YbD3-OWziqFy4I,
      authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FB_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FB_APP_ID,
      measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
    }
  }
}