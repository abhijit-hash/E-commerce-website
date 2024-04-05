
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCw4r34M2iSEhLmrPFic7RdiHPIkSEvuLI",
  authDomain: "myfirstapp-fb996.firebaseapp.com",
  projectId: "myfirstapp-fb996",
  storageBucket: "myfirstapp-fb996.appspot.com",
  messagingSenderId: "556054120881",
  appId: "1:556054120881:web:200cbe67f67aa944185590"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;