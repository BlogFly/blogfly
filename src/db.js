import FireBase from 'firebase'
// Initialize Firebase
  const fireBaseApp = FireBase.initializeApp({
    apiKey: "AIzaSyCtYKM7g77B5HYbI8TdxtKb9rMLWwfMK-4",
    authDomain: "blogfly-6fc01.firebaseapp.com",
    databaseURL: "https://blogfly-6fc01.firebaseio.com",
    projectId: "blogfly-6fc01",
    storageBucket: "blogfly-6fc01.appspot.com",
    messagingSenderId: "220327227656"
  });
export const db = fireBaseApp.database()