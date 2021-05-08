import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCPKziWC9aa6nK_y9ghg6oL3r8jLgFHbNc",
  authDomain: "crwnclothing-f2199.firebaseapp.com",
  projectId: "crwnclothing-f2199",
  storageBucket: "crwnclothing-f2199.appspot.com",
  messagingSenderId: "1094632740295",
  appId: "1:1094632740295:web:021f5f3cb0231fa1a475e2",
  measurementId: "G-T57D736GTT",
};

export const createUserProfileDocument = async ({
  userAuth,
  additionalData,
}) => {
  if (!userAuth) return;

  console.log(firestore.doc(""));
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
