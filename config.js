// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getFirestore} from  'firebase/firestore';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

function firbaseDatabase(){

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



return getDatabase(app);
}
export default firbaseDatabase ;