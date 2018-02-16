import FireBase from "firebase"
// Initialize Firebase
  var fireBaseApp = FireBase.intializeApp( {
    apiKey: "FireBase API_KEY_HERE",
    authDomain: "blogfly-6fc01.firebaseapp.com",
    databaseURL: "https://blogfly-6fc01.firebaseio.com",
    projectId: "blogfly-6fc01",
    storageBucket: "",
    messagingSenderId: "220327227656"
  });
export const db = fireBaseApp.database()