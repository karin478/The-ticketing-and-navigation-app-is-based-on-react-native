import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getFirestore} from  'firebase/firestore';
import { getDatabase } from "firebase/database";


//The new version of firebase does not directly import react native through import, but imports initialliz and then manually starts the connection
function firbaseDatabase(){

  //Here is the key for the firebase database connection of this project
const firebaseConfig = {
  apiKey: "AIzaSyBYTOIrHA0iXUWKoq9to1gQvPhuFSKORQ4",
  authDomain: "team7-9fa42.firebaseapp.com",
  databaseURL: "https://team7-9fa42-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "team7-9fa42",
  storageBucket: "team7-9fa42.appspot.com",
  messagingSenderId: "1091777150689",
  appId: "1:1091777150689:web:9afa98b773f8b92eb9c1a0"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const database = getDatabase(app);

firebase.initializeApp(firebaseConfig);

firebase.firestore();

return getDatabase(app);
}
export default firbaseDatabase ;
