import firebase from "firebase/compat/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCBDuTw9Z4UMKTYoI2sNbOAK0m0UzmaxLU",
    authDomain: "linked-in-clone-57c1f.firebaseapp.com",
    projectId: "linked-in-clone-57c1f",
    storageBucket: "linked-in-clone-57c1f.appspot.com",
    messagingSenderId: "887772748472",
    appId: "1:887772748472:web:3a80d0a88aae2f3d6f324d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const my_auth=getAuth(firebaseApp);

export {db, my_auth};
