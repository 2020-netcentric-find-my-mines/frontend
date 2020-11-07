import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXZqXbdMLXf-lfNVaaRf7FTyS1khV_6yY",
  authDomain: "findmymines.firebaseapp.com",
  databaseURL: "https://findmymines.firebaseio.com",
  projectId: "findmymines",
  storageBucket: "findmymines.appspot.com",
  messagingSenderId: "1082480748111",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
