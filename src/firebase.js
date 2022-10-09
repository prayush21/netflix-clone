import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite'
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDnOYUt62fGfPXu-eBbt3SaTEzuRDKJS10",
    authDomain: "netflix-clone-fe8ae.firebaseapp.com",
    projectId: "netflix-clone-fe8ae",
    storageBucket: "netflix-clone-fe8ae.appspot.com",
    messagingSenderId: "52883317022",
    appId: "1:52883317022:web:4d36975f93ce5d313d290f"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth()

export { auth };
export default db;