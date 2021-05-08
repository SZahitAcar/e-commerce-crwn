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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("Error creating users!", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
