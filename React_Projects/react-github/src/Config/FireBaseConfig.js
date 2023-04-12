// const firebaseConfig = 

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const FireBaseConfig={
    apiKey: "AIzaSyDAs3m1W2_cQhuakZYgxec96nps-7hRDeQ",
    authDomain: "react-github-madhav.firebaseapp.com",
    projectId: "react-github-madhav",
    storageBucket: "react-github-madhav.appspot.com",
    messagingSenderId: "580233325792",
    appId: "1:580233325792:web:ddd3099da73e47d6657485",
    measurementId: "G-6V04RJHK7N"
};

const firebaseApp  = initializeApp(FireBaseConfig);

export const auth = getAuth(firebaseApp);
export default firebaseApp;