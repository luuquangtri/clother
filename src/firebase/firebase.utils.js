import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDSf1FdJ1VX5KmggV9A8NEi23g2nt_XWUU",
    authDomain: "crawn-db-625b3.firebaseapp.com",
    databaseURL: "https://crawn-db-625b3.firebaseio.com",
    projectId: "crawn-db-625b3",
    storageBucket: "crawn-db-625b3.appspot.com",
    messagingSenderId: "464593462625",
    appId: "1:464593462625:web:66166ad19f9c2f29f21120"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    // console.log("additionalData", additionalData);

    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // console.log(snapShot);
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            // console.log("error creating user", error.message);

        }
    }

    return userRef;

}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;